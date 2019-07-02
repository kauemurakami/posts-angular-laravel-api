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

	like(id: number){
		this.http.get('/api/like/'+id)
		.subscribe(
			(event: any) => {
			let p = this.posts.find( (p) => p.id == id) //p é um objeto post , verificando se nosso array de posts possui um post com o id recebid viaparametro
			p.likes = event.likes
		})
	}

	apagar(id: number){
		this.http.delete('/api/'+id)
		.subscribe(
			(event) => {
			let i = this.posts.findIndex((p) => p.id == id) // retorna o index do objeto post cuja p id é recebido via parametro
			if(i >= 0){
				this.posts.splice(i, 1) // splice retira o objeto com o id recebido do array de posts, e automaticamente retirando do front end
			}
		})
	}

}
