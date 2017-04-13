package hello

import (
  "net/http"
  "encoding/json"
)

func init() {
  http.HandleFunc("/brett", handler)
}

type Person struct {
	Name 		 string `json:"name"`
	Location string `json:"location"`
	Avatar   string `json:"avatar"`
	Age 		 int 		`json:"age"`
}

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Content-Type", "application/json")
  json.NewEncoder(w).Encode(Person{
  	"Brett Peters",
  	"Boulder, CO",
  	"https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f",
  	27,
  })
}