# sitioweb-escuelas

## Deploy
- sudo docker build . -t sitio-escuelas-img
- sudo docker run -d --name sitio-escuelas-cont -p 5005:5005 sitio-escuelas-img
