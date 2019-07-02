import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpEvent } from '@angular/common/http';
import { Post } from './post'
@Injectable({
	providedIn: 'root'
})

export class PostService {
	
	public posts : Post[] = []

	constructor(private http: HttpClient) { 
		this.http.get("/api/").subscribe(
			(posts: any[]) => { //posts resposta da nossa requisição
				for(let p of posts){
					this.posts.push( //posts atributo da classe
						new Post(
							p.nome, p.titulo, p.subtitulo, p.email, p.mensagem, p.arquivo, p.id, p.likes))
				}
			})
	}


	salvar(post: Post, file: File){
		let uploadData = new FormData()
		uploadData.append('nome', post.nome)
		uploadData.append('email', post.email)
		uploadData.append('titulo', post.titulo)
		uploadData.append('subtitulo', post.subtitulo)
		uploadData.append('mensagem', post.mensagem)
		uploadData.append('arquivo', file, file.name)

		this.http.post('/api', uploadData, {reportProgress: true, observe: 'events'})
		.subscribe( (event: HttpEvent<any>) => {
			
			if(event.type == HttpEventType.Response){
				// cria o novo post
				let p: any = event.body
				this.posts.push( //posts atributo da classe
					new Post(
						p.nome, p.titulo, p.subtitulo, p.email, p.mensagem, p.arquivo, p.id, p.likes))	
			}

			if(event.type == HttpEventType.UploadProgress){
				console.log('UploadProgress')
				console.log(event)
			}
		})
	}

}
