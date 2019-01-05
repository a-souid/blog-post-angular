import {Subject} from 'rxjs';

export class PostService {
  postSubject = new Subject<any[]>();
  postsTab = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ' +
        'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      loveIts: 1,
      created_at: 1531757852000
    },
    {
      title: 'Mon deuxième post',
      content: 'Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio ' +
        'est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. ',
      loveIts: -1,
      created_at: 1531657852000
    },
    {
      title: 'Mon troisième post',
      content: 'Supplicationem quindecim dierum decrevi sententia mea. Ergo ille cumulus dierum hominis est dignitati tributus',
      loveIts: 0,
      created_at: 1531557852000
    }
  ];

  constructor() {
  }

  emitPostSubject() {
    this.postSubject.next(this.postsTab.slice());
  }

  addPost(title: string, content: string) {
    const postObject = {
      title: '',
      content: '',
      loveIts: 0,
      created_at: Date.now()
    };
    postObject.title = title;
    postObject.content = content;
    this.postsTab.push(postObject);
    this.emitPostSubject();
  }

  deletePost(i: number) {
    this.postsTab.splice(i, 1);
    this.emitPostSubject();
    console.log(this.postsTab);
  }

  loveItsUpDate(i: number, loveIts: number) {
    this.postsTab[i].loveIts = loveIts;
    this.emitPostSubject();
  }

}
