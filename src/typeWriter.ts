export default class TypeWriter {
  private element: HTMLElement;
  private sentences: string[];
  private isLoop: boolean;
  private shouldStop: boolean = false;
  private period: number = 2000;
  private loopNum: number;
  private text: string = '';
  private isDeleting: boolean = false;

  constructor(element: HTMLElement, sentences: string[] = [], isLoop: boolean = true) {
    this.element = element;
    this.sentences = sentences;
    this.isLoop = isLoop;
    this.loopNum = this.sentences.length - 1;
    this.tick();
  }

  private tick(): void {
    const fullText: string = this.sentences[this.loopNum];
    let delta: number = 200 - Math.random() * 100;

    this.text = this.isDeleting
      ? fullText.substring(0, this.text.length - 1)
      : fullText.substring(0, this.text.length + 1);

    this.element.innerHTML = this.text;

    if (this.isDeleting) { delta /= 2; }

    if (this.isDeleting && this.text === '') {
      this.isDeleting = false;
      this.loopNum = this.loopNum < 0 ? this.sentences.length - 1 : this.loopNum -= 1;
      delta = 500;
    } else if (!this.isDeleting && this.text === fullText) {
      delta = this.period;
      this.isDeleting = true;
      if (this.loopNum === 0) {
        this.shouldStop = !this.isLoop;
      }
    }

    if (!this.shouldStop) {
      setTimeout(() => { this.tick(); }, delta);
    }
  }
}
