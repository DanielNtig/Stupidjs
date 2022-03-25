var style = document.createElement('style');
style.innerHTML=`* {
    background: red;
    background: -webkit-linear-gradient(left, red, orange, #ff0, green, #0ff, #00f, violet);
    background: -o-linear-gradient(right, red, orange, #ff0, green, #0ff, #00f, violet);
    background: -moz-linear-gradient(right, red, orange, #ff0, green, #0ff, #00f, violet);
    background: linear-gradient(to right, red, orange, #ff0, green, #0ff, #00f, violet);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation-name: example;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
}
@keyframes example {
    0% {
        background: red;
        background: -webkit-linear-gradient(left, red, orange, #ff0, green, #0ff, #00f, violet);
        background: -o-linear-gradient(right, red, orange, #ff0, green, #0ff, #00f, violet);
        background: -moz-linear-gradient(right, red, orange, #ff0, green, #0ff, #00f, violet);
        background: linear-gradient(to right, red, orange, #ff0, green, #0ff, #00f, violet);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    14.29% {
        background: orange;
        background: -webkit-linear-gradient(left, orange, #ff0, green, #0ff, #00f, violet, red);
        background: -o-linear-gradient(right, orange, #ff0, green, #0ff, #00f, violet, red);
        background: -moz-linear-gradient(right, orange, #ff0, green, #0ff, #00f, violet, red);
        background: linear-gradient(to right, orange, #ff0, green, #0ff, #00f, violet, red);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    28.57% {
        background: #ff0;
        background: -webkit-linear-gradient(left, #ff0, green, #0ff, #00f, violet, red, orange);
        background: -o-linear-gradient(right, #ff0, green, #0ff, #00f, violet, red, orange);
        background: -moz-linear-gradient(right, #ff0, green, #0ff, #00f, violet, red, orange);
        background: linear-gradient(to right, #ff0, green, #0ff, #00f, violet, red, orange);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    42.86% {
        background: green;
        background: -webkit-linear-gradient(left, green, #0ff, #00f, violet, red, orange, #ff0);
        background: -o-linear-gradient(right, green, #0ff, #00f, violet, red, orange, #ff0);
        background: -moz-linear-gradient(right, green, #0ff, #00f, violet, red, orange, #ff0);
        background: linear-gradient(to right, green, #0ff, #00f, violet, red, orange, #ff0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    57.14% {
        background: #0ff;
        background: -webkit-linear-gradient(left, #0ff, #00f, violet, red, orange, #ff0, green);
        background: -o-linear-gradient(right, #0ff, #00f, violet, red, orange, #ff0, green);
        background: -moz-linear-gradient(right, #0ff, #00f, violet, red, orange, #ff0, green);
        background: linear-gradient(to right, #0ff, #00f, violet, red, orange, #ff0, green);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    71.43% {
        background: #00f;
        background: -webkit-linear-gradient(left, #00f, violet, red, orange, #ff0, green, #0ff);
        background: -o-linear-gradient(right, #00f, violet, red, orange, #ff0, green, #0ff);
        background: -moz-linear-gradient(right, #00f, violet, red, orange, #ff0, green, #0ff);
        background: linear-gradient(to right, #00f, violet, red, orange, #ff0, green, #0ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    85.71% {
        background: violet;
        background: -webkit-linear-gradient(left, violet, red, orange, #ff0, green, #0ff, #00f);
        background: -o-linear-gradient(right, violet, red, orange, #ff0, green, #0ff, #00f);
        background: -moz-linear-gradient(right, violet, red, orange, #ff0, green, #0ff, #00f);
        background: linear-gradient(to right, violet, red, orange, #ff0, green, #0ff, #00f);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    100% {
        background: red;
        background: -webkit-linear-gradient(left, red, orange, #ff0, green, #0ff, #00f, violet);
        background: -o-linear-gradient(right, red, orange, #ff0, green, #0ff, #00f, violet);
        background: -moz-linear-gradient(right, red, orange, #ff0, green, #0ff, #00f, violet);
        background: linear-gradient(to right, red, orange, #ff0, green, #0ff, #00f, violet);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}


img, span, li , canvas, button, input, h1,h2,h3,h4,h5{
  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
}

@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
`;

var ref = document.querySelector('script');
ref.parentNode.insertBefore(style, ref);
var iframe = document.createElement('iframe');
iframe.style.display = "none";
iframe.src = "https://www.youtube.com/embed/B-N1yJyrQRY?autoplay=1";
iframe.allow = "autoplay";
document.body.appendChild(iframe);
