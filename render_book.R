# install packages 

install.packages("rmarkdown")
install.packages("tinytex")
install.packages("bookdown")

# load packages

library(rmarkdown)
library(tinytex)
library(bookdown)

# create a skeleton bookdown project

bookdown:::bookdown_skeleton(getwd())

# render book

bookdown::render_book("index.Rmd", "bookdown::gitbook")
bookdown::render_book("index.Rmd", "bookdown::pdf_book")
bookdown::render_book("index.Rmd", "bookdown::epub_book")

