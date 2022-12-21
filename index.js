function scuberGreetingForFeet(feet){
    
    if (feet<=400){
        return 'This one is on me!'
    }
    else if(feet>2000 && feet<=2500){
      return 'I will gladly take your thirty bucks.'
    }
    else if(feet>2500){
      return 'No can do.'
    }
  }

  function ternaryCheckCity(city){
    // if (city === 'NYC'){
    //   return 'Ok, sounds good.'
    // }
    // else{
    //   return 'No go.'
    // }
    return city == 'NYC' ? ('Ok, sounds good.' ): ('No go.')
  }
  
  function switchOnCharmFromTip(tip) {
    switch (tip) {
      case 'generous':
      return 'Thank you so much.'
      break;
      case 'not as generous':
      return'Thank you.'
      break;
      default:
      return 'Bye.'
    }
  }



  // describe('switchOnCharmFromTip()', function () {
  //   it('should return "Thank you so much." if the tip is generous', function () {
  //     expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
  //   });

  //   it('should return "Thank you." if the tip is not as generous', function () {
  //     expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
  //   });

  //   it('should return "Bye." if anything else', function () {
  //     expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
  //   });
  // });



//   describe('switchOnCharmFromTip()', function () {
//     it('should return "Thank you so much." if the tip is generous', function () {
//       expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
//     });

//     it('should return "Thank you." if the tip is not as generous', function () {
//       expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
//     });

//     it('should return "Bye." if anything else', function () {
//       expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
//     });
//   });
// });
