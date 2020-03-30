export default class TypeWriter {
  private element: HTMLElement;
  private sentences: string[];
  private period: number = 2000;
  private loopNum: number = 0;
  private text: string = '';
  private isDeleting: boolean = true;


  constructor(element: HTMLElement, sentences: string[] = []) {
    this.element = element;
    this.sentences = sentences;
    this.tick();
    this.isDeleting = false;
  }

  tick() {
    const i = this.loopNum % this.sentences.length;
    const fullText = this.sentences[i];

    if (this.isDeleting) {
      this.text = fullText.substring(0, this.text.length - 1);
    } else {
      this.text = fullText.substring(0, this.text.length + 1);
    }

    this.element.innerHTML = this.text; // '<span class="wrap">' + this.text + '</span>';

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.text === fullText) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.text === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(() => { this.tick(); }, delta);
  }
}
