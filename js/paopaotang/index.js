function Player(name, teamColor){
    this.enemies = [] //敌人
    this.partners = [] //队友
    this.name = name
    this.teamColor = teamColor
    this.state = 'live'
}
Player.prototype.win = function(){
    //kill all
    console.log(`${this.name}win`)
}
Player.prototype.lose = function(){
    console.log(`${this.name}lose`)
}
Player.prototype.die = function(){
    console.log(`${this.name} die`)
    this.state = 'die'
    let all_dead = true //都死了
    for(var i = 0,partner;partner = this.partners[i++];){
        if(partner.state === 'live'){
            all_dead = false;
            break
        }
    }
    if(all_dead === true){
        for(var i = 0,partner;partner = this.partners[i++];){
            partner.lose()//队友输了
        }
        this.lose()//自己也输了
        for(var i = 0,enemie;enemie = this.enemies[i++];){
            enemie.win()//敌人赢了
        }
    }
}
// 组队  生成玩家  工厂类负责
var players = [] //全局变量 所有玩家
var playerFactory = function(name, teamColor){
    var newPlayer = new Player(name, teamColor)
    for (var i = 0,player; player = players[i++];){
        if(player.teamColor === newPlayer.teamColor){
            player.partners.push(newPlayer)
            newPlayer.partners.push(player);
        }else{
            player.enemies.push(newPlayer)
            newPlayer.enemies.push(player)
        }
    }
    players.push(newPlayer)
    return newPlayer
}
var player1 = playerFactory('小炮','red')
var player2 = playerFactory('提莫','red')
var player3 = playerFactory('小法','red')
var player4 = playerFactory('露露','red')
var player5 = playerFactory('波比','red')
var player6 = playerFactory('剑圣','blue')
var player7 = playerFactory('剑豪','blue')
var player8 = playerFactory('剑姬','blue')
var player9 = playerFactory('剑魔','blue')
var player10 = playerFactory('武器','blue')
// console.log(players)

player1.die()
player2.die()
player3.die()
player4.die()
player5.die()