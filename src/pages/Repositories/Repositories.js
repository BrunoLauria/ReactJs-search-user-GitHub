import React, { useEffect, useState} from "react";
import * as S from './styled';
import { Link } from 'react-router-dom';

export default function Repositories () {
    const [repositories, setRepositories] =  useState([]);

    //capturando localStorege e armazenando
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName')
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        //localStorage.clear();
    }, [] );

    return (
    
     <S.Container>
        <S.H1>Repositories</S.H1>
        <S.List>
           { repositories.map ( repository => {
               return (
                   <S.ListItem>Repositórios: { repository }</S.ListItem>
               )
           })}
        </S.List>
           <S.LinkHome to="/">Voltar</S.LinkHome>
     </S.Container>
    

    )
}

