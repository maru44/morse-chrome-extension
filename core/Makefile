.PHONY: build

build/big:
	GOOS=js GOARCH=wasm go build -o ../front/src/gen/main.wasm

build:
	tinygo build -o ../front/src/gen/main.wasm -target wasm ./main.go
