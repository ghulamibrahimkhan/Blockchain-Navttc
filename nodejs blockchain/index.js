const { status } = require('express/lib/response')
var sha256 = require('sha256')

class Block {
    constructor(timestamp, transactions, nonce, prevHash, height) {
        this.timestamp = time
        this.transactions = transactions
        this.nonce = nonce
        this.prevHash = prevHash
        this.height = height
        this.hash = this.createHash(timestamp, transactions, nonce, prevHash, height)
    }
    createHash(timestamp, transactions, nonce, prevHash, height) {
        return sha256(timestamp, JSON.stringify(transactions), nonce, prevHash, height)
    }

    static proofOfWork(timestamp, transactions, prevHash, height) {
        nonce = 0
        difficulty = '111'
        sucess = true
        while (sucess = true) {
            nonce++
            var hash = sha256(timestamp, JSON.stringify(transactions), nonce, prevHash, height)

            if (hash.splice(0, 3) == difficulty) {
                sucess = false
                console.log('hurray we got the correct nonce' + nonce);

            }

        }
    }
}

class Blockchain {
    constructor() {

        this.chain = [this.createGenesisBlock()]
        this.mempool = []
    }

    createGenesisBlock() {
        var time = Date.now().toString()
        var nonce = Block.proofOfWork(time, this.mempool, '0', 1)
        var newBlock = Block(time, this.mempool, nonce, '0', 1)
        console.log('Hi we created genesis');
        this.mempool = []
        return newBlock
    }

    mineNewBlock() {
        var time = Date.now.toString()
        prevHash = this.chain[this.chain.length - 1].hash
        nonce = Block.proofOfWork(time, this.mempool, prevHash, this.chain.length + 1)
        newBlock = new Block(time, this.mempool, nonce, prevHash, this.chain.length + 1)
        this.chain.push(newBlock)
        console.log(`Hi we created block no ${this.chain.length + 1}`);
        this.mempool = []
    }

    createTx(fromAdress, toAdress, value) {
        var tx = { 'from': fromAdress, 'to': toAdress, 'amount': value }
        this.mempool.push(tx)
    }

    isChainValid() {
        var valid = true
        if (this.chain[0].prevHash != 0 && this.chain[0].height != 1) {
            return false

        }
        for (var i = 0; i < this.chain.length; i++) {
            if (this.chain[i].height != i + 1) {
                return false
            }
            if (this.chain[i - 1].hash != this.chain[i].prevHash) {
                return false
            }
            if (this.chain.hash != this.chain[i].timestamp, this.chain[i].JSON.stringify(transactions), this.chain[i].nonce, this.chain[i].prevHash, this.chain[i].height) {
                return false
            }
        }
        return valid
    }
}

var myBlockChain = new Blockchain()
myBlockChain.mineNewBlock()

myBlockChain.createTx('Ibrahim', 'Bilal', 10000)
myBlockChain.mineNewBlock()

console.log(myBlockChain);
