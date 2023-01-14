//go:build js && wasm

package main

import (
	"fmt"
	"syscall/js"

	"github.com/maru44/morse/morse"
)

// global varuables must reset after finish
var ch = make(chan string)
var r = ""
var m *morse.Morse

// func init() {
// 	m = morse.NewMorse()
// 	initialize()
// 	// m.SetSend(func(m *morse.Morse, ch chan string) {
// 	// 	send(m, ch)
// 	// })
// 	m.SetRecieve(func(m *morse.Morse, ch chan string, ret *string) {
// 		morse.BaseReceive(m, ch, &r)
// 	})
// }

// func initialize() {
// 	ch = make(chan string)
// 	r = ""
// 	go m.Recieve(ch, &r)
// }

func single(this js.Value, args []js.Value) any {
	// ch <- m.SinglePing
	fmt.Println("result:", r)
	return nil
}

func registerSingle() {
	js.Global().Set("single", js.FuncOf(single))
}

func main() {
	registerSingle()
	select {}
}

// func send(m *morse.Morse, ch chan string) {
// 	time.After(200 * time.Millisecond)
// 	ch <- m.SinglePing
// 	time.After(200 * time.Millisecond)
// 	ch <- m.SinglePing
// 	time.After(200 * time.Millisecond)
// 	ch <- m.SinglePing
// 	time.After(500 * time.Millisecond)
// 	ch <- m.QuitPing
// }
