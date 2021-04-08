import PowerUP from './PowerUP'
import Tumblers from './Tumblers'
import Memo from './Memo'

export default class Main {
  setActions() {
    const tumBTN = document.getElementById('tumblers'),
      mem = document.getElementById('memo'),
      switch1 = document.getElementById('switch_1'),
      switch2 = document.getElementById('switch_2'),
      switch3 = document.getElementById('switch_3'),
      switch4 = document.getElementById('switch_4'),
      switch5 = document.getElementById('switch_5'),
      switch6 = document.getElementById('switch_6'),
      switch7 = document.getElementById('switch_7'),
      switch8 = document.getElementById('switch_8'),
      vpns = document.getElementById('vpns'),
      vpnu = document.getElementById('vpnu'),
      vmr01 = document.getElementById('vmr01'),
      vmr02 = document.getElementById('vmr02'),
      vmr03 = document.getElementById('vmr03'),
      vmr04 = document.getElementById('vmr04'),
      mbs = document.getElementById('MBS'),
      mbu = document.getElementById('MBU'),
      modeWrap = document.querySelector('.mode__wrap')

    const PmBC = document.getElementById('PmBC'),
      PmTK = document.getElementById('PmTK'),
      PgDG = document.getElementById('PgDG'),
      PmCT = document.getElementById('PmCT'),
      Pg13 = document.getElementById('Pg13'),
      PgN = document.getElementById('PgN'),
      PgpN = document.getElementById('PgpN'),
      PMC = document.getElementById('PMC'),
      dPkonf = document.getElementById('dPkonf'),
      OSleft = document.getElementById('OSleft'),
      OSright = document.getElementById('OSright')

    const tumImg1 = document.querySelector('.tumImg1'),
      tumImg2 = document.querySelector('.tumImg2'),
      tumImg3 = document.querySelector('.tumImg3'),
      tumImg4 = document.querySelector('.tumImg4'),
      tumImg5 = document.querySelector('.tumImg5'),
      tumImg6 = document.querySelector('.tumImg6'),
      tumImg7 = document.querySelector('.tumImg7')

    const TCwrapR = document.querySelector('.TC__wrap-r'),
      ZwrapR = document.querySelector('.Z__wrap-r'),
      powers = document.querySelector('.powers'),
      disT3 = document.querySelector('.display-t3'),
      disOFF1 = document.querySelector('.display-off1'),
      disOFF2 = document.querySelector('.display-off2'),
      displayALL = document.querySelectorAll('.display-all'),
      inNamALL = document.querySelectorAll('.inNam__ALL')

    const powerUP = new PowerUP(switch1, switch2, switch3, switch4, switch5, switch6, switch7, switch8, mbs, mbu, TCwrapR, ZwrapR, powers, disT3, disOFF1, disOFF2, displayALL, inNamALL)

    const tumblers = new Tumblers(tumImg1, tumImg2, tumImg3, tumImg4, tumImg5, tumImg6, tumImg7, vpns, vpnu, vmr01, vmr02, vmr03, vmr04, PmBC, PmTK, PgDG, PmCT, Pg13, PgN, PgpN, PMC, dPkonf, OSleft, OSright, modeWrap, TCwrapR, ZwrapR)

    const memo = new Memo(mem)

    mem.addEventListener('click', memo.getCranes.bind(memo))
    powers.addEventListener('click', powerUP.getPowers.bind(powerUP))
    tumBTN.addEventListener('click', tumblers.getTumblers.bind(tumblers))
  }
}
