const { result } = require(`lodash`);

class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
    this.gameHistoryLog.push(`Yahya selected Scissors, CPU selected Paper: Yahya wins wins`);
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    const cpuSelection = acceptedValues[Math.floor(Math.random() * acceptedValues.length)];
    return cpuSelection;
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    const loser = `lose`;
    const winner = `win`;
    const oops = `tie`;
    if (userSelection === cpuSelection){
      return oops;
    } 
    else if (userSelection == `rock`){
      if(cpuSelection == `paper`){
        return loser;
      }else{
        return winner;
      }
    }else if(userSelection == `scissors`){
      if(cpuSelection == `rock`){
        return loser;
      }else{
        return winner;
      }
    }else if(userSelection == `paper`){
      if(cpuSelection == `scissors`){
        return loser;
      }else{
        return winner;
      }
    }

  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    const loser = `lose`;
    const winner = `win`;
    if (result.textContent === winner){
      this.score.user ++;
    }else if (result.textContent === loser){
      this.score.cpu ++;
    }

  }
}