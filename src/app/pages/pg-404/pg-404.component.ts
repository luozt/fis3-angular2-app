import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pg-404',
  templateUrl: './pg-404.component.pug',
  styleUrls: ['./pg-404.component.less']
})
export class Pg404Component {
  controlData = {
    notFound: null,
  };

  pageData = {
    timer: null,
  };

  constructor(
    private router: Router
    ){}

  ngOnInit(){
    this.initControls();
  }

  ngOnDestroy(){
    clearInterval(this.pageData.timer);
  }

  initControls(){
    this.controlData.notFound = {
      title: '404！找不到此页面',
      details: ''
    };

    let sec = 5;
    let update = (sec)=>{
      this.controlData.notFound.details = `${sec}秒后跳转到首页...`;
    };
    this.pageData.timer = setInterval(()=>{
      if(sec){
        update(--sec);
      }else{
        this.router.navigate(['/home']);
      }
    }, 1000*1);
    update(sec);
  }
}
