const solution = (cipher, code) => 
[...cipher].filter((a,i) => (i+1)%code ===
0).join("");