https://barrd.dev/article/create-a-variable-font-subset-for-smaller-file-size/#choosing-your-unicode-sets
https://fonttools.readthedocs.io/en/latest/subset/index.html#module-fontTools.subset
https://wakamaifondue.com/beta/

## Inter feature

- default: calt, kern
- add: cv05 (Lower case L with tail), cv06 (Curved lower case r), tnum (Tabular number), numr (Numerators)

## With italic ~59KB

pyftsubset Inter.ttf --unicodes="U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD" --layout-features="calt,kern,cv05,cv06,tnum,numr" --flavor="woff2" --output-file="Inter-latin.var.woff2" --ignore-missing-glyphs

## Without italic ~41KB

pyftsubset Inter-roman.ttf --unicodes="u+00-00ff,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd" --layout-features="calt,kern,cv05,cv06,tnum,numr" --flavor="woff2" --output-file="Inter-roman-latin.var.woff2" --ignore-missing-glyphs

## Unicodes

/_ cyrillic-ext _/
unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F
/_ cyrillic _/
unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116
/_ greek-ext _/
unicode-range: U+1F00-1FFF
/_ greek _/
unicode-range: U+0370-03FF
/_ vietnamese _/
U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB
/_ latin-ext _/
U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF
/_ latin _/
U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
