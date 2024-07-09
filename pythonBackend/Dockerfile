FROM python:3.8-alpine

#WORKDIR /usr/Esummit23-backend

ENV PYTHONBUFFERED 1

# install psycopg2 dependencies for postgres
# RUN apk update \
#   && apk add postgresql-dev gcc python3-dev musl-dev build-base py-pip jpeg-dev zlib-dev xvfb fontconfig ttf-freefont ffmpeg libwebp libwebp-tools libwebp-dev

# RUN apk add gcc musl-dev python3-dev libffi-dev openssl-dev



RUN pip install --upgrade pip \
  && pip install --upgrade setuptools \
  && pip install --upgrade pipenv  \
  && pip install --upgrade boto3 \
  && pip install --upgrade django-storages \
  && pip install gevent

#  && pip install psycopg2


COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

RUN mkdir /xre/backend
WORKDIR /xre/backend

COPY . .

CMD ["sh", "-c", "python manage.py collectstatic --no-input; python manage.py migrate;gunicorn pythonBackend.wsgi:application -b 0.0.0.0:8000 --timeout 60000"]