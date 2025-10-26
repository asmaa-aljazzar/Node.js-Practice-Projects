### Sorting
This repo contains Javascript implementation of popular sorting algorithms.

All the implementations work in browser as well as  nodejs environments.

#### API Naming convention
Algorithm implementation is exposed as a functions named after algorithm in camelcasing. For eg: bubble-sort is exposed as bubbleSort

#### Usage
Below steps outline how it can be used in broser and node.

##### Browser
1. Every algorithm resides in its own file. So its easy to loacate what you need.
2. Include your choices via script tags.
3. The implementations are exposed as window.sort object. Eg: window.sort.bubbleSort

##### Node
1. All you need to do is require('sort') and you get an object that contans all implementations.
