import { LitElement, html, css } from 'lit';

export class CrisRating extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px;
    }

    .title {
      font-weight: 400;
      padding: 10px 0;
    }

    .stars {
      display: flex;
    }

    .star {
      width: 30px;
      margin: 20px 10px;
      cursor: pointer;
    }

    button {
      border: none;
      background-color: transparent;
    }
    textarea {
      padding: 20px;
      font-family: 'Montserrat', sans-serif;
      &::placeholder {
        font-family: 'Montserrat', sans-serif;
      }
    }
  `;

  static properties = {
    text: {
      type: String,
    },
    starsCounter: {
      type: Number,
      attribute: 'stars-counter',
    },
    rating: {
      type: Number,
    },
    showTextarea: {
      type: Boolean,
    },
  };

  constructor() {
    super();
    this.text = '¿Qué te ha parecido?';
    this.starsCounter = 0;
    this.rating = 0;
    this.showTextarea = false;
  }

  fillStar(index) {
    this.filledStars = index + 1;
    this.rating = index + 1;
    this.showTextarea = true;
    console.log(`Estrella clikada: ${this.rating}`);
  }

  render() {
    const emptyStar = '../src/images/star.png';
    const filledStar = '../src/images/star1.png';

    const starsArray = Array.from({ length: this.starsCounter });

    return html`
      <div class="container">
        <span class="title">${this.text}</span>

        <div class="stars">
          ${starsArray.map(
            (star, starIndex) =>
              html`<button @click="${() => this.fillStar(starIndex)}">
                <img
                  class="star"
                  src="${starIndex < this.filledStars ? filledStar : emptyStar}"
                  alt="Estrella"
                />
              </button>`
          )}
        </div>

        ${this.showTextarea
          ? html`<textarea
              placeholder="Déjanos saber tu opinión..."
              cols="50"
              rows="10"
            ></textarea>`
          : html``}
      </div>
    `;
  }
}
