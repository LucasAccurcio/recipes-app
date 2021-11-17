// import React, { useContext } from 'react';
// import Modal from './Modal';
// import Context from '../context/Context';

// function PreparandoBebida() {
//   const { drinks } = useContext(Context);
//   const [modal, setModal] = useState(false);
//   const THREE_SECONDS = 3000;

// function getIngredientes(list) {
//   const ingredientes = [];
//   const NUMBER_OF_INGREDIENTS = 15;
//   for (let index = 1; index <= NUMBER_OF_INGREDIENTS; index += 1) {
//     const ingred = list[`strIngredient${index}`];
//     const quantidade = list[`strMeasure${index}`];
//     if (ingred !== '' && quantidade !== '') {
//       ingredientes.push(`${quantidade} - ${ingred}`);
//     }
//   }
//   return ingredientes;
// }

//   return (
//     <section>
//       <div>
//         <Modal modal={ modal } />
//         <img
//           data-testid="recipe-photo"
//           className="image-recipe"
//           src={ drinks.strDrinkThumb }
//           alt="receita"
//         />
//         <div className="title-container">
//           <div className="text-container">
//             <h2 className="margin-txt" data-testid="recipe-title">{drinks.strDrink}</h2>
//             <h4
//               className="category margin-txt"
//               data-testid="recipe-category"
//             >
//               {drinks.strCategory}
//               {` (${drinks.strAlcoholic})`}
//             </h4>
//           </div>
//           <button
//             type="button"
//             onClick={ () => {
//               window.navigator.clipboard.writeText(window.location.href);
//               setModal(true);
//               setTimeout(() => {
//                 setModal(false);
//               }, THREE_SECONDS);
//             } }
//           >
//             <img
//               data-testid="share-btn"
//               className="icon"
//               src={ shareIcon }
//               alt="share icon"
//             />
//           </button>
//           <button
//             type="button"
//             onClick={ favoritar }
//           >
//             <img
//               data-testid="favorite-btn"
//               className="icon"
//               src={ favorito.img }
//               alt="favorite"
//             />
//           </button>
//         </div>
//         <div className="ingredient-container">
//           <h5>Ingredientes</h5>
//           <div className="ingredients">
//             { getIngredients(drinks).map((item, index) => (
//               item !== 'null - null'
//             && (
//               <label htmlFor={ item }>
//                 <input
//                   type="checkbox"
//                   key={ index }
//                   data-testid={ `${index}-ingredient-name-and-measure` }
//                   name={ item }
//                 />
//                 { item }
//               </label>
//             )
//             )) }
//           </div>
//         </div>
//         <div className="instructions">
//           <p data-testid="instructions">{drinks.strInstructions}</p>
//         </div>
//         <div className="start-btn-container">
//           <button
//             className="start-btn"
//             type="button"
//             data-testid="finish-recipe-btn"
//           >
//             Finalizar Receita
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PreparandoBebida;
