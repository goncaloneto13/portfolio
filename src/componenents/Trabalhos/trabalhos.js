import './trabalhos.css'
import {AiTwotoneFileText,AiOutlinePaperClip} from 'react-icons/ai'
import vggface2 from '../../assets/images/VGGFaces2.jpg'


export default function Trabalhos(){

    return(
        <div className='trabalho'>
            <div className='trabalho-box'>
                <h1><AiTwotoneFileText></AiTwotoneFileText> Trabalhos Publicados </h1>

                <h2><li>Age-Invariant Face Recognition to Aid Visually Impaired People </li> <img src={vggface2}></img></h2>
              

                <h3><t/>Este trabalho propõem uma abordagem para auxiliar pessoas com deficiência visual no reconhecimento de pessoas independente da idade.
                O objetivo é desenvolver um sistema que utilize uma abordagem de reconhecimento facial, com foco na invariância na idade, que retorne bons resultados comparados aos resultados obtidos na revisão da literatura. <br/><br/>
                A abordagem estudada utiliza Redes Neurais Convolucionais profundas CCNs, pré-treinadas pelo conjunto de dados VGGFace2, para extrair descritores de características de imagens de faces e classificar com o algoritmo de classificação Linear SVM. Como pode ser visto no decorrer do trabalho, a abordagem retornou 89,9% de acurácia, utilizando o conjunto de dados FG-NET, com 1002 imagens. E utilizando o conjunto de dados CACD, que contém 163.446 imagens divididas em quatro subconjuntos diferentes, três conjuntos para treino e um para teste, a abordagem retornou 85,2%, 82,4% e 88,2% de acurácia para cada modelo treinado com um conjunto de treinamento diferente.
                </h3>
                
                <h3><AiOutlinePaperClip/> <a href="https://sol.sbc.org.br/index.php/eniac/article/view/18244"> Link para o Artigo</a></h3>

                

            </div>
        </div>
    )
}