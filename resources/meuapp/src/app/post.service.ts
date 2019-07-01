import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post'
@Injectable({
	providedIn: 'root'
})

export class PostService {
	
	constructor(private http: HttpClient) { }

	public posts : Post[] = [
	new Post('kaue', 'meu primeiro post', 'testando ','kaue@gmail.com','sou uma mensagem'),
	new Post('maria', 'post de maria', 'teste maria ','maria@gmail.com','sou uma mensagem'),
	new Post('carlos', 'post de carlos', 'teste calos ','carlos@gmail.com','sou uma mensagem'),
	new Post('kaue', 'meu primeiro post', 'testando ','kaue@gmail.com','sou uma mensagem'),
	new Post('maria', 'post de maria', 'teste maria ','maria@gmail.com','sou uma mensagem'),
	new Post('carlos', 'post de carlos', 'teste calos ','carlos@gmail.com','sou uma mensagem'),
	new Post('kaue', 'meu primeiro post', 'testando ','kaue@gmail.com','sou uma mensagem'),
	new Post('maria', 'post de maria', 'teste maria ','maria@gmail.com','sou uma mensagem'),
	new Post('carlos', 'post de carlos', 'teste calos ','carlos@gmail.com','sou uma mensagem') ]
}
