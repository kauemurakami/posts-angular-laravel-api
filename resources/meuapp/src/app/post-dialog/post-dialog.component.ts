import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Post } from '../post'

@Component({
	selector: 'app-post-dialog',
	templateUrl: './post-dialog.component.html',
	styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {

	private nomeArquivo : string = ''


	private dados = {
		post: new Post("","","","","",""),
		arquivo: null
	}

	constructor(public dialogRef: MatDialogRef<PostDialogComponent>) { }

	ngOnInit() {

	}

	mudouArquivo(event){
		console.log(event)
		this.nomeArquivo = event.target.files[0].name
		this.dados.arquivo = event.target.files[0]
	}

	salvar(){
		this.dialogRef.close(this.dados)
	}

	cancelar(){
		this.dialogRef.close(null)
	}
}
