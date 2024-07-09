FROM python:3.10-alpine

#WORKDIR /usr/Esummit23-backend

ENV PYTHONBUFFERED 1


COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

RUN mkdir -p /xre/backend
WORKDIR /xre/backend

COPY . .

CMD ["sh", "-c", "python manage.py collectstatic --no-input; python manage.py migrate;gunicorn pythonBackend.wsgi:application -b 0.0.0.0:8000 --timeout 60000"]