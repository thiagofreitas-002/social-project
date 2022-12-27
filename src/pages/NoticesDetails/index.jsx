import * as C from "./styles";
import { useState, useEffect } from "react";
import { apiProject } from "../../services/api";
import { Link, useParams } from "react-router-dom";
import { DiscussionEmbed } from "disqus-react";
import { ArrowLeft } from "phosphor-react";
import Utterances from "utterances-react";
import styled from "@emotion/styled";

export function NoticesDetails() {
  const [item, setItem] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    try {
      apiProject.get(`/news/${postId}`).then((response) => {
        const item = response.data;
        setItem(item);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <C.Container>
      <C.Content>
        <img src={item.image} alt="" />
        <C.Comp>
          <Link to="/notices">
            <ArrowLeft
              size={32}
              weight="bold"
              style={{ display: "inline-block" }}
              color="#245633"
            />
            Voltar
          </Link>
          <C.TextContent>
            <h1 id="title">{item.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
          </C.TextContent>
          <C.Comments>
            <Utterances
              repo="thiagofreitas-002/social-project"
              issueTerm="pathname"
              label=""
              theme="dark-blue"
              crossorigin="anonymous"
              async={false}
            />
          </C.Comments>
        </C.Comp>
      </C.Content>
    </C.Container>
  );
}
