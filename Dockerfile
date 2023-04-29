# Base image
FROM python:3.8

# Update and install mysqlclient
RUN apt-get update && apt-get install -y default-mysql-client 
RUN pip install Django djangorestframework mysqlclient gunicorn 

# Set environment variables
ENV PYTHONUNBUFFERED 1
ENV DJANGO_SETTINGS_MODULE bookie.settings
ENV MYSQL_DATABASE='bookie'
ENV MYSQL_USER='root'
ENV MYSQL_PASSWORD='Tripathi'
ENV MYSQL_HOST=mysql
ENV MYSQL_PORT=3306

# Set the working directory
WORKDIR /

# Install dependencies
COPY requirements.txt ./
RUN pip install -r requirements.txt

# Copy the Django project code into the container
COPY . ./

# Run migrations
# RUN python manage.py migrate

# Expose the Django server port
EXPOSE 8000

# # Run the Django development server
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
# Start the Django server with gunicorn
# CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "3", "bookie.wsgi:application"]