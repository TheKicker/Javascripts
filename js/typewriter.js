class TypeWriter {
    constructor(t, i, e = 3e3) {
            this.txtElement = t, this.words = i, this.txt = "", this.wordIndex = 0, this.wait = parseInt(e, 10), this.type(), this.isDeleting = !1
    }
    type() {
            const t = this.wordIndex % this.words.length
                    , i = this.words[t];
            this.isDeleting ? this.txt = i.substring(0, this.txt.length - 1) : this.txt = i.substring(0, this.txt.length + 1), this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
            let e = 300;
            this.isDeleting && (e /= 2), this.isDeleting || this.txt !== i ? this.isDeleting && "" === this.txt && (this.isDeleting = !1, this.wordIndex++, e = 500) : (e = this.wait, this.isDeleting = !0), setTimeout(() => this.type(), e)
    }
}

function init() {
    const t = document.getElementById("typewriter")
            , i = JSON.parse(t.getAttribute("data-words"))
            , e = t.getAttribute("data-wait");
    new TypeWriter(t, i, e)
}
document.addEventListener("DOMContentLoaded", init);