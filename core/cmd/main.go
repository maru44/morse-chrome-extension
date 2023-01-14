package main

import (
	"fmt"
	"time"

	"github.com/maru44/morse/morse"
)

func main() {
	ch := make(chan string)
	r := ""

	m := morse.NewMorse()
	m.SetSend(func(m *morse.Morse, ch chan string) {
		send(m, ch)
	})
	m.SetRecieve(func(m *morse.Morse, ch chan string, ret *string) {
		morse.BaseReceive(m, ch, &r)
	})

	fmt.Println(m.InitMessage())

	go m.Recieve(ch, &r)
	m.Send(ch)

	fmt.Println(string(m.ConvertCode(r)))
}

func send(m *morse.Morse, ch chan string) {
	time.After(200 * time.Millisecond)
	ch <- m.SinglePing
	time.After(200 * time.Millisecond)
	ch <- m.SinglePing
	time.After(200 * time.Millisecond)
	ch <- m.SinglePing
	time.After(500 * time.Millisecond)
	ch <- m.QuitPing
}
