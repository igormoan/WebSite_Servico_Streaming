

<h1 align=”center”>Projeto Serviço de Streaming - CuboFlix</h1>


O projeto em questão, foi a criação de um website com aplicação para um serviço de streaming, como por exemplo, um Netflix.</br>
Nesse projeto aplicou-se as tecnologias <strong> <i> HTML, CSS, JAVASCRIPT </i> </strong>

No HTML foi criado a estrutura e o conteúdo da página web. Definindo a estrutura lógica dos elementos da página, como títulos, parágrafos, imagens e links.

O CSS foi definido a aparência e o layout do website, permitindo as aplicações dos estilos, como cores, fontes, margens e posições. Para isso, foi separado 3 pastas (COLOR, GLOBAL e STYLE) Assim, é possível prezar pela organização dos códigos, aplicando um código limpo.

Por fim, temos o JavaScript onde foi adicionado a interatividade e as funcionalidades dinâmicas da páginas web, criando os elementos interativos. Para isso, é utilizado a manipução da DOM e o seus eventos, como o click, keydown e etc. Além do uso de funções assíncronas e a integração com APIS.
#

# Detalhe do projeto:
![](https://github.com/igormoan/WebSite_Servico_Streaming/blob/main/screenshots/web_site.jpg)




- Visualização de filmes (\*)


- Paginação de filmes (\*)
- Busca de filmes (\*)
- "Filme do dia" (\*)
- Modal de filme (\*)
- Mudança de tema

Os dados do website serão requisitados da [seguinte API](https://tmdb-proxy.cubos-academy.workers.dev)

## Detalhamentos de Requisitos

### Visualização de filmes

Assim que o website for aberto, a listagem de filmes deverá ser preenchida com as informações do [seguinte endpoint](https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false)

Exemplo de retorno:

```json
{
  "results": [
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
      "genre_ids": [28, 12, 14],
      "id": 436969,
      "original_language": "en",
      "original_title": "The Suicide Squad",
      "overview": "Os supervilões Harley Quinn (Margot Robbie), Bloodsport (Idris Elba), Peacemaker (John Cena) e uma coleção de malucos condenados da prisão de Belle Reve juntam-se à super-secreta e super-obscura Força Tarefa X, enquanto são deixados na remota ilha de Corto Maltese para combater o inimigo.",
      "popularity": 6294.822,
      "poster_path": "https://image.tmdb.org/t/p/original/wTS3dS2DJiMFFgqKDz5fxMTri.jpg",
      "release_date": "2021-07-28",
      "title": "O Esquadrão Suicida",
      "video": false,
      "vote_average": 8.1,
      "vote_count": 2435,
      "price": 10
    },
    {
      "adult": false,
      "backdrop_path": "https://image.tmdb.org/t/p/original/7WJjFviFBffEJvkAms4uWwbcVUk.jpg",
      "genre_ids": [12, 14, 35, 28],
      "id": 451048,
      "original_language": "en",
      "original_title": "Jungle Cruise",
      "overview": "O destemido capitão Frank Wolff e a intrépida pesquisadora Lily Houghton se aventuram pela Amazônia a bordo da peculiar embarcação La Quila. Determinados a encontrar uma árvore cujos poderes de cura podem mudar o futuro da medicina, nem mesmo as águas perigosas e as forças sobrenaturais que enfrentam pelo caminho poderão detê-los. Mas os riscos aumentam ainda mais conforme os segredos da árvore se revelam, o destino de Lily e Frank e também de toda a humanidade está em jogo.",
      "popularity": 5788.065,
      "poster_path": "https://image.tmdb.org/t/p/original/9E76j2DcQv8LdbX1Wa9jpbDBfw1.jpg",
      "release_date": "2021-07-28",
      "title": "Jungle Cruise",
      "video": false,
      "vote_average": 7.9,
      "vote_count": 1801,
      "price": 3.5
    }
  ]
}
```


### Paginação de filmes

Contendo **18 filmes**. Cada página exibirá **6 filmes** por vez, portanto, considerando o número total de filmes (**18**) e de filmes por página (**6**), a aplicação deve ter **3 páginas (0, 1, 2)**.

O `<button class="btn-prev">`, quando clicado, se não estiver na página 0, terá que voltar 1 página, se não, levará o usuário para a página 2
O `<button class="btn-next">`, quando clicado, se não estiver na página 2, terá que avançar 1 página, se não, levará o usuário para a página 0

Ao voltar ou avançar uma página, os filmes em tela serão atualizados corretamente.

### Busca de filmes

O usuário poderá buscar um filme por meio do `<input class="input">`

Quando o usuário pressionar a tecla "Enter" enquanto estiver com foco no input, algumas coisas terão que acontecer:

- O usuário terá que ser levado para a página 0
- Se o input possuir algum valor, você deverá realizar uma busca [no endpoint](https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false) passando um parâmetro de query "query" com o valor do input. Ex: Buscando por Matrix https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false&query=Matrix
- Se o input não possuir valor nenhum, você deverá realizar a mesma busca que é feita para preencher os filmes iniciais (Visualização de filmes)
- O valor do input terá que ser limpo

### "Filme do dia"

Assim que o website for aberto, o filme do dia deverá ser preenchido com as informações do [endpoint geral](https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR) e do [endpoint de videos](https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR);

Exemplo de retorno:

**Endpoint Geral**

```json
{
  "adult": false,
  "backdrop_path": "https://image.tmdb.org/t/p/original/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
  "belongs_to_collection": {
    "id": 531242,
    "name": "Suicide Squad Collection",
    "poster_path": "https://image.tmdb.org/t/p/original/bdgaCpdDh0J0H7ZRpDP2NJ8zxJE.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/e0uUxFdhdGLcvy9eC7WlO2eLusr.jpg"
  },
  "budget": 180000000,
  "genres": [
    {
      "id": 28,
      "name": "Ação"
    },
    {
      "id": 12,
      "name": "Aventura"
    },
    {
      "id": 14,
      "name": "Fantasia"
    }
  ],
  "homepage": "https://www.thesuicidesquad.net",
  "id": 436969,
  "imdb_id": "tt6334354",
  "original_language": "en",
  "original_title": "The Suicide Squad",
  "overview": "Os supervilões Harley Quinn (Margot Robbie), Bloodsport (Idris Elba), Peacemaker (John Cena) e uma coleção de malucos condenados da prisão de Belle Reve juntam-se à super-secreta e super-obscura Força Tarefa X, enquanto são deixados na remota ilha de Corto Maltese para combater o inimigo.",
  "popularity": 6294.822,
  "poster_path": "https://image.tmdb.org/t/p/original/wTS3dS2DJiMFFgqKDz5fxMTri.jpg",
  "production_companies": [
    {
      "id": 9993,
      "logo_path": "https://image.tmdb.org/t/p/original/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
      "name": "DC Entertainment",
      "origin_country": "US"
    },
    {
      "id": 128064,
      "logo_path": "https://image.tmdb.org/t/p/original/13F3Jf7EFAcREU0xzZqJnVnyGXu.png",
      "name": "DC Films",
      "origin_country": "US"
    },
    {
      "id": 507,
      "logo_path": "https://image.tmdb.org/t/p/original/z7H707qUWigbjHnJDMfj6QITEpb.png",
      "name": "Atlas Entertainment",
      "origin_country": "US"
    },
    {
      "id": 429,
      "logo_path": "https://image.tmdb.org/t/p/original/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
      "name": "DC Comics",
      "origin_country": "US"
    },
    {
      "id": 11565,
      "logo_path": null,
      "name": "The Safran Company",
      "origin_country": "US"
    },
    {
      "id": 174,
      "logo_path": "https://image.tmdb.org/t/p/original/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
      "name": "Warner Bros. Pictures",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2021-07-28",
  "revenue": 118084747,
  "runtime": 132,
  "spoken_languages": [
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    },
    {
      "english_name": "Spanish",
      "iso_639_1": "es",
      "name": "Español"
    }
  ],
  "status": "Released",
  "tagline": "Eles estão loucos... para salvar o mundo.",
  "title": "O Esquadrão Suicida",
  "video": false,
  "vote_average": 8.1,
  "vote_count": 2469
}
```

**Endpoint de videos**

```json
{
  "id": 436969,
  "results": [
    {
      "iso_639_1": "pt",
      "iso_3166_1": "BR",
      "name": "O Esquadrão Suicida | Trailer Oficial | Legendado",
      "key": "VO_oW4GDy7o",
      "site": "YouTube",
      "size": 1080,
      "type": "Trailer",
      "official": false,
      "published_at": "2021-03-26T17:12:53.000Z",
      "id": "605e1ae71065d3003d9a23f7"
    },
    {
      "iso_639_1": "pt",
      "iso_3166_1": "BR",
      "name": "O Esquadrão Suicida - Trailer Restrito Oficial",
      "key": "Ch6DQDFbovI",
      "site": "YouTube",
      "size": 1080,
      "type": "Trailer",
      "official": true,
      "published_at": "2021-03-26T16:00:03.000Z",
      "id": "605e0aea8c31590029451a47"
    }
  ]
}
```




### Modal de filme

![]https://github.com/igormoan/WebSite_Servico_Streaming/blob/main/screenshots/modal.jpg

Assim que o modal for **aberto**, ele deverá ser preenchido com as informações do [seguinte endpoint](https://tmdb-proxy.cubos-academy.workers.dev/3/movie/?language=pt-BR) passando um parâmetro de rota com o valor do **id** do filme. Ex: Buscando pelo filme com id 436969 https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR

O modal poderá ser "fechado" por meio de um clique nele próprio ou na `<img class="modal__close">`, ao clicar em qualquer um dos dois, a classe "hidden" deverá ser adicionada a `<div class="modal">`

Exemplo de retorno:

```json
{
  "adult": false,
  "backdrop_path": "https://image.tmdb.org/t/p/original/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
  "belongs_to_collection": {
    "id": 531242,
    "name": "Suicide Squad Collection",
    "poster_path": "https://image.tmdb.org/t/p/original/bdgaCpdDh0J0H7ZRpDP2NJ8zxJE.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/e0uUxFdhdGLcvy9eC7WlO2eLusr.jpg"
  },
  "budget": 180000000,
  "genres": [
    {
      "id": 28,
      "name": "Ação"
    },
    {
      "id": 12,
      "name": "Aventura"
    },
    {
      "id": 14,
      "name": "Fantasia"
    }
  ],
  "homepage": "https://www.thesuicidesquad.net",
  "id": 436969,
  "imdb_id": "tt6334354",
  "original_language": "en",
  "original_title": "The Suicide Squad",
  "overview": "Os supervilões Harley Quinn (Margot Robbie), Bloodsport (Idris Elba), Peacemaker (John Cena) e uma coleção de malucos condenados da prisão de Belle Reve juntam-se à super-secreta e super-obscura Força Tarefa X, enquanto são deixados na remota ilha de Corto Maltese para combater o inimigo.",
  "popularity": 6294.822,
  "poster_path": "https://image.tmdb.org/t/p/original/wTS3dS2DJiMFFgqKDz5fxMTri.jpg",
  "production_companies": [
    {
      "id": 9993,
      "logo_path": "https://image.tmdb.org/t/p/original/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
      "name": "DC Entertainment",
      "origin_country": "US"
    },
    {
      "id": 128064,
      "logo_path": "https://image.tmdb.org/t/p/original/13F3Jf7EFAcREU0xzZqJnVnyGXu.png",
      "name": "DC Films",
      "origin_country": "US"
    },
    {
      "id": 507,
      "logo_path": "https://image.tmdb.org/t/p/original/z7H707qUWigbjHnJDMfj6QITEpb.png",
      "name": "Atlas Entertainment",
      "origin_country": "US"
    },
    {
      "id": 429,
      "logo_path": "https://image.tmdb.org/t/p/original/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
      "name": "DC Comics",
      "origin_country": "US"
    },
    {
      "id": 11565,
      "logo_path": null,
      "name": "The Safran Company",
      "origin_country": "US"
    },
    {
      "id": 174,
      "logo_path": "https://image.tmdb.org/t/p/original/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
      "name": "Warner Bros. Pictures",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2021-07-28",
  "revenue": 118084747,
  "runtime": 132,
  "spoken_languages": [
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    },
    {
      "english_name": "Spanish",
      "iso_639_1": "es",
      "name": "Español"
    }
  ],
  "status": "Released",
  "tagline": "Eles estão loucos... para salvar o mundo.",
  "title": "O Esquadrão Suicida",
  "video": false,
  "vote_average": 8.1,
  "vote_count": 2469
}
```



### Mudança de tema

![](https://github.com/igormoan/WebSite_Servico_Streaming/blob/main/screenshots/dark_theme.jpg)

Ao clicar na `<img class="btn-theme">`, caso o **tema atual** seja "light" ou "claro", o mesmo deverá ser trocado para o tema "dark" ou "escuro", após isso, você deverá modificar o tema (imagens e cores) do seu website de acordo com o Figma. Essa troca de tema, poderá ser facilitada caso seja feita por meio da troca de variáveis CSS.

