import { Component } from '@angular/core';
import { EventComponent } from '../event/event.component';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-events',
  imports: [EventComponent, CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  eventsInfo=[
    {'icon': 'faDog','title':'Mutt Strutt', 'details': 'Every contestant will have an opportunity to strut onto the stage with their pooch. We will be going in reverse order of fundraising, with the sixteenth dog going first and our top fundraiser  going last. Feel free to bring any flare, tricks, or dance moves you want for your walk. Dogs will be kept accompanied on leash the whole time during the mutt strut. Once all sixteen dogs have strutted, we will set out sixteen jars, one with each dog’s name. The audience will be given a coin each to vote for their dog of choice. The top eight vote-receiving dogs will move onto the next round.', 'photos': 'todo'},
    {'icon': 'faPoo', 'title':'Poo Bag Toss','details': 'We will have the remaining eight contestants line up, again with the highest fundraiser going last. There will be a wooden board set up on the stage and each contestant will be given three filled “poop bags” (no actual poop will be used!) to toss at the board, aiming for various holes that are worth different amounts of points. Think corn hole meets skeeball! The one caveat – your dog’s leash will be on your throwing arm with volunteers trying to tempt your dog away and ruin your aim. And no, you aren’t allowed to tell your dog to stay', 'photos': 'todo'},
    {'icon': 'faQuestion','title':'Jeo-PAW-dy', 'details': ' There are 5 categories with 3 questions per category. Each category will have a hard, medium or easy question, worth 3, 2, or 1 points. Each human will choose their difficulty and corresponding points. Then we will lay five treats out, one on each category and the dog will choose the category by choosing a treat. Everyone will have a chance to “buzz” in using their squeaky toy. Fastest buzz gets to answer', 'photos': 'todo'},
    {'icon': 'faPaw', 'title':'UnderDog','details': ' This will be your opportunity to make it back into the contest and right into the finals. Event TBD. Past years included “Guess the Toy” and “Treat Tower”. Treat tower is  a treat stacking game with one big caveat. Your dog is right there to eat and/or disturb your tower.', 'photos': 'todo'},
    {'icon': 'faTrophy', 'title':'Tell Your Story','details': 'The final two owners, as well as the contestant who makes it back in from the loser’s bracket (or a friend if you get stage fright), will individually go on stage with their dog. Each will have up to three minutes to tell a story. Any story! It could be how you got the dog, a cute thing they did, or show off some tricks you taught them. This is your three minutes to do what you want with, so be creative! The winner will be selectedby the audience with voting tokens!', 'photos': 'todo'}

  ]
  pasteventsInfo=[
    {'icon': 'faYinYang', 'title':'Sinners vs. Saints','details': "In previous years, the Final Four showdown was our Sinners vs Saints challenge—a hilarious stage event where pups had to choose between their humans and a tasty treat. But this year? We're shaking things up. The theme and format for 2025's Final Four are still under wraps, but one thing’s for sure: it’ll be fun, dog-friendly, and audience-driven. Whether you're in it to win it or just there for the laughs, the energy is always high and the crowd plays a huge role in choosing who makes it to the final round. Stay tuned for what’s in store!", 'photos': 'todo'}
  ]
}
