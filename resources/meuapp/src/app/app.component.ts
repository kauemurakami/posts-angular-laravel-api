import { Component } from '@angular/core'
import { Post } from './post'
import { MatDialog } from '@angular/material'
import { PostDialogComponent } from './post-dialog/post-dialog.component'
import { PostService } from './post.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'meuapp'

  private posts : Post[]

  constructor(
    public dialog: MatDialog, 
    private postService: PostService){}


  ngOnInit(){
    this.posts = this.postService.posts
  }

  openDialog(){
    const dialogRef = this.dialog.open(PostDialogComponent, {width: '500px'})  
    dialogRef.afterClosed().subscribe(
      result => {
        if(result){
          console.log(result)
        }
      })
  }
}
