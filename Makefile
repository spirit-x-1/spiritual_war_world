.PHONY: run-backend run-frontend run-all

run-backend:
	cd backend && python3 -m venv venv && \
		source venv/bin/activate && \
		pip3 install -r requirements.txt && \
		python3 manage.py runserver

run-frontend:
	cd frontend && npm install && npm start

run-all:
	@echo "Starting backend..."
	make run-backend & \
	echo "Starting frontend..." && \
	cd frontend && npm start
