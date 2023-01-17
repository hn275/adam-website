package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

var r *gin.Engine

func init() {
	r = gin.New()
	if err := r.SetTrustedProxies(nil); err != nil {
		log.Fatal(err)
	}
}

func main() {
	r.Use(gin.CustomRecovery(recover))
	r.Use(gin.Logger())

	// route
	r.GET("/", func(c *gin.Context) {
		c.Status(http.StatusTeapot)
	})

	if err := r.Run(":3001"); err != nil {
		log.Fatal(err)
	}
}

func recover(c *gin.Context, recovered any) {
	if err, ok := recovered.(string); ok {
		log.Println(fmt.Sprintf("[ERROR] %s", err))
	}

	c.AbortWithStatus(http.StatusInternalServerError)
}
