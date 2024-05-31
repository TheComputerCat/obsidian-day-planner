PROJECT_ROOT=$(shell echo $${PROJECT_ROOT:-$(PWD)})

build:
	docker build -t node-odp .
run:
	docker run --rm -it -v $(PROJECT_ROOT):/home/node_user/src/code node-odp /bin/bash