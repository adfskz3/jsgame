import chalk from 'chalk';
import readlineSync from 'readline-sync';

class Player {
  constructor(hp, atk) {
  this.hp = 100;
  this.atk = 10;
  }

  attack() {
    Monster.hp -= this.atk;
 }
}

class Monster {
  constructor(hp, atk) {
    this.hp = 100;
    this.atk = 10;
  }

  attack() {
    Player.hp -= this.atk;
    // 몬스터의 공격
  }
}

function displayStatus(stage, player, monster) {
  console.log(chalk.magentaBright(`\n=== Current Status ===`));
  console.log(
    chalk.cyanBright(`| Stage: ${stage} `) +
    chalk.blueBright(
      `| 플레이어 정보 HP : ${player.hp} atk : ${player.atk} |`,
    ) +
    chalk.redBright(
      `| 몬스터 정보 HP : ${monster.hp} atk : ${monster.atk} |`,
    ),
  );
  console.log(chalk.magentaBright(`=====================\n`));
}

const battle = async (stage, player, monster) => {
  let logs = [];

  while(player.hp > 0) {
    console.clear();
    displayStatus(stage, player, monster);

    logs.forEach((log) => console.log(log));

    console.log(
      chalk.green(
        `\n1. 공격한다 2. 아무것도 하지않는다.`,
      ),
    );
    const choice = readlineSync.question('당신의 선택은? ');
    

    // 플레이어의 선택에 따라 다음 행동 처리
    logs.push(chalk.green(`${choice}를 선택하셨습니다.`));

    switch (choice) {
      case '\n1':
          const mMonster = new Monster(Player.attack)
          console.log(mMonster);
          break;
      case '2':
          console.log(chalk.yellow(''));
          break;
        }
  }

  
};



export async function startGame() {
  console.clear();
  const player = new Player();
  let stage = 1;

  while (stage <= 10) {
    const monster = new Monster(stage);
    await battle(stage, player, monster);

    // 스테이지 클리어 및 게임 종료 조건

    stage++;
  }
}