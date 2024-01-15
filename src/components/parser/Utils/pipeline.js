import "./utilStyles.scss";

/**
 * Simple if statements to process **quiz** question and answer text
 */

function pipeline(text) {
  /*
   * looking for ~~ X ~~ in text and transforms X to subscript
   */
  if (text !== "" && text.includes("~~")) {
    //Regular expression that will match everything between tildas ---> ~~X~~
    const regex = /~~(.*?)~~/gm; //---> question mark means it matches the minimum length expresion
    text = text.replace(regex, "<sub>$1</sub>");
  }
  /*
   * looking for %% X %% in text and transforms X to superscript
   */
  if (text !== "" && text.includes("%%")) {
    const regex = /%%(.*?)%%/gm;
    text = text.replace(regex, "<sup>$1</sup>");
  }
  /*
   * input: nomirator|denominator
   * output:  nomirator
   *         -----------
   *         denominator
   */
  if (text !== "" && text.includes("||")) {
    //const res = text.split('|');
    const regex = /\|\|([^|]*)\|([^|]*)\|\|/gm;
    text = text.replace(
      regex,
      `<span class='fraction'>
          <span class='nom'>$1</span>
          <span class='denom'>$2</span>
      </span>`
    );
  }

  if (text !== "" && text.includes("|")) {
    //const res = text.split('|');
    const regex = /([^|]*)\|([^|]*)/gm;
    text = text.replace(
      regex,
      `<span class='fraction'>
          <span class='nom'>$1</span>
          <span class='denom'>$2</span>
      </span>`
    );
  }

  /**
   * Look for ^^^X^^^ in text and wrap X with span class 'top-line' for upper line symbol
   */
  if (text.includes("^^^")) {
    const regex = /\^\^\^(.*?)\^\^\^/gm;
    text = text.replace(regex, `<span class="top-line">$1</span>`);
  }

  return text;
}

export default pipeline;
