​​​​​​
## 1. 문제 파악
- Trie 자료 구조를 구현하는 문제
- Trie는 문자열을 삽입하고 검색하는 데 사용
- 주어진 메서드 insert, search, startsWith를 구현해야 했다.

## 2. 해결방법 구현 절차
- TrieNode 클래스를 정의해서, 각 노드가 문자(character)를 자식 노드로 가지도록 설계했다.
- Trie 클래스에는 루트 노드를 가지고 시작하며,
- insert 메서드에서 문자열을 삽입하고,
-  search 및 startsWith 메서드에서 문자열을 검색 및 접두사 확인하도록 구현했다.

## 3. 코드 설명
#### 1. TrieNode 클래스 정의
- TrieNode 객체 :
  - 문자(character)를 자식 노드로 가지는 children 객체와
  - 현재 노드가 단어의 끝인지 나타내는 isEndOfWord 변수를 가진다.
```
var TrieNode = function() {
    this.children = {};
    this.isEndOfWord = false;
};
```
#### 2. Trie 클래스 정의
- Trie 객체는 루트 노드 root를 생성하며, 이 루트 노드는 모든 문자열의 시작점을 나타낸다.
```
var Trie = function() {
    this.root = new TrieNode();
};

```

#### 3. insert 메소드
- Trie에 문자열 word를 삽입한다.
- 루트 노드부터 시작하여 문자열의 각 문자(char)를 순회하면서 Trie를 구성한다.
- 이미 해당 문자에 대한 자식 노드가 없는 경우, 새로운 노드를 생성하고 children 객체에 추가한다.
- 마지막 문자를 처리한 후에는 해당 노드를 단어의 끝(isEndOfWord)으로 표시힌다.
```
Trie.prototype.insert = function(word) {
    let node = this.root;
    for (const char of word) {
        if (!node.children[char]) {
            node.children[char] = new TrieNode();
        }
        node = node.children[char];
    }
    node.isEndOfWord = true;
};
```
#### 4. search 메소드
-  Trie에서 문자열 word를 검색한다.
-  마찬가지로 루트 노드부터 시작하여 문자열의 각 문자를 순회하면서 Trie를 탐색한다.
-  만약 어떤 문자에 대한 자식 노드가 없으면, Trie에 해당 문자열이 존재하지 않는 것으로 간주하고 false를 반환한다.
- 그렇지 않으면 마지막 노드의 isEndOfWord 값을 반환하여 해당 문자열이 Trie에 있는지 여부를 확인한다.
```
Trie.prototype.search = function(word) {
    let node = this.root;
    for (const char of word) {
        if (!node.children[char]) {
            return false;
        }
        node = node.children[char];
    }
    return node.isEndOfWord;
};
```

#### 5. startsWith 메소드
- Trie에 접두사 prefix가 있는지 확인한다.
- 마찬가지로 루트 노드부터 시작하여 접두사의 각 문자를 순회하면서 Trie를 탐색한다.
-  접두사의 모든 문자가 Trie에 존재하면 true를 반환하고, 그렇지 않으면 false를 반환한다.
```
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (const char of prefix) {
        if (!node.children[char]) {
            return false;
        }
        node = node.children[char];
    }
    return true;
};
```

## 4. 회고
- 다른 솔루션을 살펴보면서 자료 구조를 간단하게 구현하는 데 있어서 이 코드가 꽤 간결하다는 것을 느꼈다.
- Trie 자료 구조를 이해하고, 문제 해결에 활용하는데 도움이 되었다.
- 더 효율적인 구현 방법이나 최적화 기회가 있는지 고민할 수 있을 것 같다.

```
var TrieNode = function() {
    this.children = {};
    this.isEndOfWord = false;
};

var Trie = function() {
    this.root = new TrieNode();
};

Trie.prototype.insert = function(word) {
    let node = this.root;
    for (const char of word) {
        if (!node.children[char]) {
            node.children[char] = new TrieNode();
        }
        node = node.children[char];
    }
    node.isEndOfWord = true;
};

Trie.prototype.search = function(word) {
    let node = this.root;
    for (const char of word) {
        if (!node.children[char]) {
            return false;
        }
        node = node.children[char];
    }
    return node.isEndOfWord;
};

Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (const char of prefix) {
        if (!node.children[char]) {
            return false;
        }
        node = node.children[char];
    }
    return true;
};
