default: start

project:=ms-workspace-demo
service:=ms-demo-node

.PHONY: start
start:
	docker-compose -p ${project} up -d

.PHONY: stop
stop:
	docker-compose -p ${project} down

.PHONY: logs
logs:
	docker-compose -p ${project} logs -f ${service}

.PHONY: ps
ps:
	docker-compose -p ${project} ps

.PHONY: build
build:
	docker-compose -p ${project} build --no-cache

.PHONY: install-dependencies
install-dependencies:
	docker-compose -p ${project} exec ${service} npm install

.PHONY: install-package
install-package:
	docker-compose -p ${project} exec ${service} npm install -S ${package}

.PHONY: install-dev-package
install-dev-package:
	docker-compose -p ${project} exec ${service} npm install -D ${package}

.PHONY: migration-create
migration-create:
	docker-compose -p ${project} exec ${service} node_modules/db-migrate/bin/db-migrate create --sql-file

.PHONY: migrate
migrate:
	docker-compose -p ${project} exec ${service} node_modules/db-migrate/bin/db-migrate up

.PHONY: test
test:
	docker-compose -p ${project} exec ${service} npm run test-native
