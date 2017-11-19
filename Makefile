default: start

.PHONY: start
start: 
	docker-compose up -d

.PHONY: stop
stop: 
	docker-compose down

.PHONY: logs
logs: 
	docker-compose logs -f ms-demo-node

.PHONY: build
build:
	docker-compose build --no-cache

.PHONY: install-dependencies
install-dependencies:
	docker-compose exec ms-demo-node npm install

.PHONY: install-package
install-package:
	docker-compose exec ms-demo-node npm install -S ${package}

.PHONY: install-dev-package
install-dev-package:
	docker-compose exec ms-demo-node npm install -D ${package}

.PHONY: migration-create
migration-create:
	docker-compose exec ms-demo-node node_modules/db-migrate/bin/db-migrate create --sql-file

.PHONY: migrate
migrate:
	docker-compose exec ms-demo-node node_modules/db-migrate/bin/db-migrate up

.PHONY: test
test:
	docker-compose exec ms-demo-node npm run test-native
