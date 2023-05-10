# # Base image
# FROM python:3.8

# # Update and install mysqlclient
# RUN apt-get update && apt-get install -y default-mysql-client 
# RUN pip install Django djangorestframework mysqlclient gunicorn 

# # Set environment variables
# ENV PYTHONUNBUFFERED 1
# ENV DJANGO_SETTINGS_MODULE bookie.settings
# ENV MYSQL_DATABASE='bookie'
# ENV MYSQL_USER='root'
# ENV MYSQL_PASSWORD='Tripathi'
# ENV MYSQL_HOST=mysql
# ENV MYSQL_PORT=3306

# # Set the working directory
# WORKDIR /

# # Install dependencies
# COPY requirements.txt ./
# RUN pip install -r requirements.txt

# # Copy the Django project code into the container
# COPY . ./

# # Run migrations
# # RUN python manage.py migrate

# # Expose the Django server port
# EXPOSE 8000

# # # Run the Django development server
# # CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
# # Start the Django server with gunicorn
# # CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "3", "bookie.wsgi:application"]

###########
# BUILDER #
###########

# pull official base image
FROM python:3.12.0a7-bullseye as builder

# set work directory 
WORKDIR /usr/src/app

# set environment variables 
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
COPY ./requirements.txt .
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /usr/src/app/wheels -r requirements.txt


#########
# FINAL #
#########

# pull official base image
FROM python:3.12.0a7-bullseye

# installing netcat (nc) since we are using that to listen to mysql server in entrypoint.sh
RUN apt-get update && apt-get install -y --no-install-recommends netcat default-mysql-client && \
    apt-get autoremove -y && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# install dependencies
COPY --from=builder /usr/src/app/wheels /wheels
COPY --from=builder /usr/src/app/requirements.txt .
RUN pip install --no-cache /wheels/*

# set work directory
WORKDIR /usr/src/app

# copy entrypoint.sh
COPY ./entrypoint.sh /usr/src/app/entrypoint.sh

# copy our django project
COPY ./ .

# run entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh
# ENTRYPOINT ["/usr/src/app/entrypoint.sh"]