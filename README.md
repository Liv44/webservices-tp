# webservices-tp
Tp de positionnement WebServices

This project is dockerized, and needs Docker to be launched.

# Launch API
- copy `.env.example` to `.env` and fill it with your own values
- `docker compose up` : start containers
- `npx prisma db push` : create tables on database, based on prisma schema
- go to `http://localhost:3000` to access the API