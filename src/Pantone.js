// import React from 'react';
// import './pantone-colors.css';
// import './pantone-colors-variables.css';
// import './pantone-colors.json';
// import './pantone-colors.less';
// import './pantone-colors.scss';

// const Pantone = () =>{
//     return(
//         <div className = "pantonediv">
//             <h1 className="text-center">Pantone colors</h1>
//   <h5 className="text-center"><em>Click any square to copy hex code.</em></h5>
//   <div className="text-center">
//   {/* <iframe src="https://ghbtns.com/github-btn.html?user=margaret2&repo=pantone-colors&type=star&count=true"
//     frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
//     <a href="https://twitter.com/share" className="twitter-share-button"
//     data-url="https://margaret2.github.io/pantone-colors" data-via="23_jumi"
//     data-show-count="false">Tweet</a> */}
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tbody><tr><td className="egret" data-clipboard-text="#f3ece0"> </td><td> Egret </td></tr></tbody>
//         <tbody><tr><td className="snow-white" data-clipboard-text="#f2f0eb"> </td><td> Snow white </td></tr></tbody>
//         <tbody><tr><td className="bright-white" data-clipboard-text="#f4f5f0"> </td><td>Bright white </td></tr></tbody>
//         <tbody><tr><td className="cloud-dancer" data-clipboard-text="#f0eee9"> </td><td>Cloud dancer </td></tr></tbody>
//         <tbody><tr><td className="gardenia" data-clipboard-text="#f1e8df"> </td><td>Gardenia </td></tr></tbody>
//         <tbody><tr><td className="marshmallow" data-clipboard-text="#f0eee4"> </td><td>Marshmallow </td></tr></tbody>
//         <tbody><tr><td className="blanc-de-blanc" data-clipboard-text="#e7e9e7"> </td><td>Blanc de blanc </td></tr></tbody>
//       </table>
//     </div>

//     <div className="col-3">
//       <table>
//       <tbody><tr><td className="pristine" data-clipboard-text="#f2e8da"> </td><td>Pristine </td></tr></tbody>
//       <tbody><tr><td className="whisper-white" data-clipboard-text="#ede6db"> </td><td>Whisper white </td></tr></tbody>
//       <tbody> <tr><td className="white-asparagus" data-clipboard-text="#e1dbc8"> </td><td>White asparagus </td></tr></tbody>
//       <tbody><tr><td className="birch" data-clipboard-text="#ddd5c7"> </td><td>Birch </td></tr></tbody>
//       <tbody><tr><td className="turtledove" data-clipboard-text="#ded7c8"> </td><td>Turtledove </td></tr></tbody>
//       <tbody><tr><td className="bone-white" data-clipboard-text="#d7d0c0"> </td><td>Bone white </td></tr></tbody>
//       <tbody><tr><td className="silver-birch" data-clipboard-text="#d2cfc4"> </td><td>Silver birch </td></tr></tbody>
//       </table>
//     </div>

//     <div className="col-3">
//       <table>
//         <tr><td className="vanilla-ice" data-clipboard-text="#f0eada"> </td><td>Vanilla ice </td></tr>
//         <tr><td className="papyrus" data-clipboard-text="#f5edd6"> </td><td>Papyrus </td></tr>
//         <tr><td className="antique-white" data-clipboard-text="#ede3d2"> </td><td>Antique white </td></tr>
//         <tr><td className="winter-white" data-clipboard-text="#f5ecd2"> </td><td>Winter white </td></tr>
//         <tr><td className="cloud-cream" data-clipboard-text="#e6ddc5"> </td><td>Cloud cream </td></tr>
//         <tr><td className="angora" data-clipboard-text="#dfd1bb"> </td><td>Angora </td></tr>
//         <tr><td className="seedpearl" data-clipboard-text="#e6dac4"> </td><td>Seedpearl </td></tr>
//       </table>
//     </div>

//     <div className="col-3">
//       <table>
//         <tr><td className="vanilla-custard" data-clipboard-text="#f3e0be"> </td><td>Vanilla custard </td></tr>
//         <tr><td className="almond-oil" data-clipboard-text="#f4efc1"> </td><td>Almond oil </td></tr>
//         <tr><td className="alabaster-gleam" data-clipboard-text="#f0debd"> </td><td>Alabaster gleam </td></tr>
//         <tr><td className="vanilla" data-clipboard-text="#f4e1c1"> </td><td>Vanilla </td></tr>
//         <tr><td className="rutabaga" data-clipboard-text="#ecddbe"> </td><td>Rutabaga </td></tr>
//         <tr><td className="banana-crepe" data-clipboard-text="#e7d3ad"> </td><td>Banana crepe </td></tr>
//         <tr><td className="italian-straw" data-clipboard-text="#e7d1a1"> </td><td>Italian straw </td></tr>
//       </table>
//     </div>
//   </div>


//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="whitecap-gray" data-clipboard-text="#e0d5c6"> </td><td>Whitecap gray </td></tr>
//         <tr><td className="fog" data-clipboard-text="#d0c5b1"> </td><td>Fog </td></tr>
//         <tr><td className="white-swan" data-clipboard-text="#e4d7c5"> </td><td>White swan </td></tr>
//         <tr><td className="sandshell" data-clipboard-text="#d8ccbb"> </td><td>Sandshell </td></tr>
//         <tr><td className="tapioca" data-clipboard-text="#dccdbc"> </td><td>Tapioca </td></tr>
//         <tr><td className="creme-brulee" data-clipboard-text="#dbccb5"> </td><td>Creme brulee </td></tr>
//         <tr><td className="parchment" data-clipboard-text="#dfd1be"> </td><td>Parchment </td></tr>
//       </table>
//     </div>

//     <div className="col-3">
//       <table>
//         <tr><td className="sheer-pink" data-clipboard-text="#f6e5db"> </td><td>Sheer pink </td></tr>
//         <tr><td className="dew" data-clipboard-text="#eeded1"> </td><td>Dew </td></tr>
//         <tr><td className="powder-puff" data-clipboard-text="#f3e0d6"> </td><td>Powder puff </td></tr>
//         <tr><td className="pearled-ivory" data-clipboard-text="#f0dfcc"> </td><td>Pearled ivory </td></tr>
//         <tr><td className="white-smoke" data-clipboard-text="#eddcc9"> </td><td>White smoke </td></tr>
//         <tr><td className="ecru" data-clipboard-text="#f3dfca"> </td><td>Ecru </td></tr>
//         <tr><td className="navajo" data-clipboard-text="#efdcc3"> </td><td>Navajo </td></tr>
//       </table>
//     </div>

//     <div className="col-3">
//       <table>
//         <tr><td className="almost-mauve" data-clipboard-text="#e7dcd9"> </td><td>Almost mauve </td></tr>
//         <tr><td className="delicacy" data-clipboard-text="#f5e3e2"> </td><td>Delicacy </td></tr>
//         <tr><td className="petal-pink" data-clipboard-text="#f2e2e0"> </td><td>Petal pink </td></tr>
//         <tr><td className="bridal-blush" data-clipboard-text="#eee2dd"> </td><td>Bridal blush </td></tr>
//         <tr><td className="cream-pink" data-clipboard-text="#f6e4d9"> </td><td>Cream pink </td></tr>
//         <tr><td className="angel-wing" data-clipboard-text="#f3dfd7"> </td><td>Angel wing </td></tr>
//         <tr><td className="pastel-parchment" data-clipboard-text="#e5d9d3"> </td><td>Pastel parchment </td></tr>
//       </table>
//     </div>

//     <div className="col-3">
//       <table>
//         <tr><td className="star-white" data-clipboard-text="#efefe8"> </td><td>Star white </td></tr>
//         <tr><td className="lily-white" data-clipboard-text="#e2e2da"> </td><td>Lily white </td></tr>
//         <tr><td className="vaporous-gray" data-clipboard-text="#dfddd7"> </td><td>Vaporous gray </td></tr>
//         <tr><td className="summer-shower" data-clipboard-text="#e5ebe3"> </td><td>Summer shower </td></tr>
//         <tr><td className="ice" data-clipboard-text="#e0e4d9"> </td><td>Ice </td></tr>
//         <tr><td className="frost" data-clipboard-text="#dde2d6"> </td><td>Frost </td></tr>
//         <tr><td className="icicle" data-clipboard-text="#dadcd0"> </td><td>Icicle </td></tr>
//       </table>
//     </div>
//   </div>


//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="bit-of-blue" data-clipboard-text="#e2eaeb"> </td><td>Bit of blue </td></tr>
//         <tr><td className="mystic-blue" data-clipboard-text="#e1e3de"> </td><td>Mystic blue </td></tr>
//         <tr><td className="bluewash" data-clipboard-text="#e2e6e0"> </td><td>Bluewash </td></tr>
//         <tr><td className="spa-blue" data-clipboard-text="#d3dedf"> </td><td>Spa blue </td></tr>
//         <tr><td className="lightest-sky" data-clipboard-text="#e4eadf"> </td><td>Lightest sky </td></tr>
//         <tr><td className="hint-of-mint" data-clipboard-text="#d8e8e6"> </td><td>Hint of mint </td></tr>
//         <tr><td className="murmur" data-clipboard-text="#d2d8d2"> </td><td>Murmur </td></tr>
//       </table>
//     </div>

//     <div className="col-3">
//       <table>
//         <tr><td className="barely-blue" data-clipboard-text="#dde0df"> </td><td>Barely blue </td></tr>
//         <tr><td className="blue-blush" data-clipboard-text="#d6dbd9"> </td><td>Blue blush </td></tr>
//         <tr><td className="zephyr-blue" data-clipboard-text="#d3d9d1"> </td><td>Zephyr blue </td></tr>
//         <tr><td className="blue-flower" data-clipboard-text="#d0d9d4"> </td><td>Blue flower </td></tr>
//         <tr><td className="sprout-green" data-clipboard-text="#cbd7d2"> </td><td>Sprout green </td></tr>
//         <tr><td className="billowing-sail" data-clipboard-text="#d8e7e7"> </td><td>Billowing sail </td></tr>
//         <tr><td className="hushed-green" data-clipboard-text="#d8e9e5"> </td><td>Hushed green </td></tr>
//       </table>
//     </div>

//     <div className="col-3">
//       <table>
//         <tr><td className="lambs-wool" data-clipboard-text="#e5d0b1"> </td><td>Lamb's wool </td></tr>
//         <tr><td className="winter-wheat" data-clipboard-text="#dfc09f"> </td><td>Winter wheat </td></tr>
//         <tr><td className="summer-melon" data-clipboard-text="#ead3ae"> </td><td>Summer melon </td></tr>
//         <tr><td className="chamomile" data-clipboard-text="#e8d0a7"> </td><td>Chamomile </td></tr>
//         <tr><td className="cornhusk" data-clipboard-text="#f2d6ae"> </td><td>Cornhusk </td></tr>
//         <tr><td className="apricot-gelato" data-clipboard-text="#f5d7af"> </td><td>Apricot gelato </td></tr>
//         <tr><td className="biscotti" data-clipboard-text="#dac7ab"> </td><td>Biscotti </td></tr>
//       </table>
//     </div>

//     <div className="col-3">
//       <table>
//         <tr><td className="asparagus-green" data-clipboard-text="#d2cdb4"> </td><td>Asparagus green </td></tr>
//         <tr><td className="oyster-white" data-clipboard-text="#d2caaf"> </td><td>Oyster white </td></tr>
//         <tr><td className="putty" data-clipboard-text="#d4cab0"> </td><td>Putty </td></tr>
//         <tr><td className="moth" data-clipboard-text="#d2cbaf"> </td><td>Moth </td></tr>
//         <tr><td className="wood-ash" data-clipboard-text="#d7cab0"> </td><td>Wood ash </td></tr>
//         <tr><td className="gravel" data-clipboard-text="#cbbfa2"> </td><td>Gravel </td></tr>
//         <tr><td className="pale-khaki" data-clipboard-text="#bfaf92"> </td><td>Pale khaki </td></tr>
//       </table>
//     </div>
//   </div>

  
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="light-gray" data-clipboard-text="#dad8c9"> </td><td>Light gray </td></tr>
// <tr><td className="silver-green" data-clipboard-text="#d7d7c7"> </td><td>Silver green </td></tr>
// <tr><td className="pelican" data-clipboard-text="#c1bcac"> </td><td>Pelican </td></tr>
// <tr><td className="overcast" data-clipboard-text="#c3bdab"> </td><td>Overcast </td></tr>
// <tr><td className="tidal-foam" data-clipboard-text="#bfb9a3"> </td><td>Tidal foam </td></tr>
// <tr><td className="agate-gray" data-clipboard-text="#b1b09f"> </td><td>Agate gray </td></tr>
// <tr><td className="alfalfa" data-clipboard-text="#b7b59f"> </td><td>Alfalfa </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="castle-wall" data-clipboard-text="#c8c1ab"> </td><td>Castle wall </td></tr>
// <tr><td className="oyster-gray" data-clipboard-text="#cbc1ae"> </td><td>Oyster gray </td></tr>
// <tr><td className="cement" data-clipboard-text="#c4b6a6"> </td><td>Cement </td></tr>
// <tr><td className="spray-green" data-clipboard-text="#aea692"> </td><td>Spray green </td></tr>
// <tr><td className="eucalyptus" data-clipboard-text="#b1a992"> </td><td>Eucalyptus </td></tr>
// <tr><td className="twill" data-clipboard-text="#a79b82"> </td><td>Twill </td></tr>
// <tr><td className="olive-gray" data-clipboard-text="#a6997a"> </td><td>Olive gray </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="chinchilla" data-clipboard-text="#9c8e7b"> </td><td>Chinchilla </td></tr>
// <tr><td className="seneca-rock" data-clipboard-text="#9a927f"> </td><td>Seneca rock </td></tr>
// <tr><td className="laurel-oak" data-clipboard-text="#918c7e"> </td><td>Laurel oak </td></tr>
// <tr><td className="coriander" data-clipboard-text="#938772"> </td><td>Coriander </td></tr>
// <tr><td className="dune" data-clipboard-text="#998978"> </td><td>Dune </td></tr>
// <tr><td className="lead-gray" data-clipboard-text="#8a7963"> </td><td>Lead gray </td></tr>
// <tr><td className="covert-green" data-clipboard-text="#80765f"> </td><td>Covert green </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="oxford-tan" data-clipboard-text="#b8a99a"> </td><td>Oxford tan </td></tr>
// <tr><td className="plaza-taupe" data-clipboard-text="#aea393"> </td><td>Plaza taupe </td></tr>
// <tr><td className="tuffet" data-clipboard-text="#a59788"> </td><td>Tuffet </td></tr>
// <tr><td className="silver-mink" data-clipboard-text="#9f8d7c"> </td><td>Silver mink </td></tr>
// <tr><td className="timber-wolf" data-clipboard-text="#8d8070"> </td><td>Timber wolf </td></tr>
// <tr><td className="taupe-gray" data-clipboard-text="#8e7c71"> </td><td>Taupe gray </td></tr>
// <tr><td className="pine-bark" data-clipboard-text="#827064"> </td><td>Pine bark </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="pumice-stone" data-clipboard-text="#cac2b9"> </td><td>Pumice stone </td></tr>
// <tr><td className="simply-taupe" data-clipboard-text="#ad9f93"> </td><td>Simply taupe </td></tr>
// <tr><td className="aluminum" data-clipboard-text="#9f9586"> </td><td>Aluminum </td></tr>
// <tr><td className="cobblestone" data-clipboard-text="#a89a8e"> </td><td>Cobblestone </td></tr>
// <tr><td className="brindle" data-clipboard-text="#82776b"> </td><td>Brindle </td></tr>
// <tr><td className="walnut" data-clipboard-text="#776a5f"> </td><td>Walnut </td></tr>
// <tr><td className="bungee-cord" data-clipboard-text="#696156"> </td><td>Bungee cord </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="oatmeal" data-clipboard-text="#cbc3b4"> </td><td>Oatmeal </td></tr>
// <tr><td className="moonbeam" data-clipboard-text="#cdc6bd"> </td><td>Moonbeam </td></tr>
// <tr><td className="rainy-day" data-clipboard-text="#cfc8bd"> </td><td>Rainy day </td></tr>
// <tr><td className="gray-morn" data-clipboard-text="#cabeb5"> </td><td>Gray morn </td></tr>
// <tr><td className="peyote" data-clipboard-text="#c5bbae"> </td><td>Peyote </td></tr>
// <tr><td className="feather-gray" data-clipboard-text="#b8ad9e"> </td><td>Feather gray </td></tr>
// <tr><td className="goat" data-clipboard-text="#a89a91"> </td><td>Goat </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="white-sand" data-clipboard-text="#dbd5d1"> </td><td>White sand </td></tr>
// <tr><td className="silver-gray" data-clipboard-text="#c1b7b0"> </td><td>Silver gray </td></tr>
// <tr><td className="chateau-gray" data-clipboard-text="#bbb1a8"> </td><td>Chateau gray </td></tr>
// <tr><td className="string" data-clipboard-text="#aa9f96"> </td><td>String </td></tr>
// <tr><td className="atmosphere" data-clipboard-text="#a89c94"> </td><td>Atmosphere </td></tr>
// <tr><td className="moon-rock" data-clipboard-text="#958b84"> </td><td>Moon rock </td></tr>
// <tr><td className="fungi" data-clipboard-text="#8f8177"> </td><td>Fungi </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="silver-lining" data-clipboard-text="#bdb6ab"> </td><td>Silver lining </td></tr>
// <tr><td className="moonstruck" data-clipboard-text="#c2beb6"> </td><td>Moonstruck </td></tr>
// <tr><td className="pussywillow-gray" data-clipboard-text="#aeaca1"> </td><td>Pussywillow gray </td></tr>
// <tr><td className="london-fog" data-clipboard-text="#a29e92"> </td><td>London fog </td></tr>
// <tr><td className="rock-ridge" data-clipboard-text="#918c86"> </td><td>Rock ridge </td></tr>
// <tr><td className="moon-mist" data-clipboard-text="#80817d"> </td><td>Moon mist </td></tr>
// <tr><td className="castor-gray" data-clipboard-text="#646762"> </td><td>Castor gray </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="glacier-gray" data-clipboard-text="#c5c6c7"> </td><td>Glacier gray </td></tr>
// <tr><td className="lunar-rock" data-clipboard-text="#c5c5c5"> </td><td>Lunar rock </td></tr>
// <tr><td className="dawn-blue" data-clipboard-text="#cacccb"> </td><td>Dawn blue </td></tr>
// <tr><td className="gray-violet" data-clipboard-text="#bbbcbc"> </td><td>Gray violet </td></tr>
// <tr><td className="vapor-blue" data-clipboard-text="#bebdbd"> </td><td>Vapor blue </td></tr>
// <tr><td className="high-rise" data-clipboard-text="#aeb2b5"> </td><td>High-rise </td></tr>
// <tr><td className="limestone" data-clipboard-text="#989a98"> </td><td>Limestone </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="silver-cloud" data-clipboard-text="#beb7b0"> </td><td>Silver cloud </td></tr>
// <tr><td className="dove" data-clipboard-text="#b3ada7"> </td><td>Dove </td></tr>
// <tr><td className="flint-gray" data-clipboard-text="#a09c98"> </td><td>Flint gray </td></tr>
// <tr><td className="drizzle" data-clipboard-text="#a09f9c"> </td><td>Drizzle </td></tr>
// <tr><td className="elephant-skin" data-clipboard-text="#8f8982"> </td><td>Elephant skin </td></tr>
// <tr><td className="cinder" data-clipboard-text="#8a7e78"> </td><td>Cinder </td></tr>
// <tr><td className="steeple-gray" data-clipboard-text="#827e7c"> </td><td>Steeple gray </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="metal" data-clipboard-text="#babfbc"> </td><td>Metal </td></tr>
// <tr><td className="blue-fox" data-clipboard-text="#b9bcb6"> </td><td>Blue fox </td></tr>
// <tr><td className="storm-gray" data-clipboard-text="#b5bab6"> </td><td>Storm gray </td></tr>
// <tr><td className="pigeon" data-clipboard-text="#a9afaa"> </td><td>Pigeon </td></tr>
// <tr><td className="mirage-gray" data-clipboard-text="#abafae"> </td><td>Mirage gray </td></tr>
// <tr><td className="puritan-gray" data-clipboard-text="#a8b0ae"> </td><td>Puritan gray </td></tr>
// <tr><td className="wrought-iron" data-clipboard-text="#999e98"> </td><td>Wrought iron </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="opal-gray" data-clipboard-text="#a49e9e"> </td><td>Opal gray </td></tr>
// <tr><td className="wild-dove" data-clipboard-text="#8b8c89"> </td><td>Wild dove </td></tr>
// <tr><td className="neutral-gray" data-clipboard-text="#8e918f"> </td><td>Neutral gray </td></tr>
// <tr><td className="gargoyle" data-clipboard-text="#686767"> </td><td>Gargoyle </td></tr>
// <tr><td className="smoked-pearl" data-clipboard-text="#656466"> </td><td>Smoked pearl </td></tr>
// <tr><td className="sedona-sage" data-clipboard-text="#686d6c"> </td><td>Sedona sage </td></tr>
// <tr><td className="gunmetal" data-clipboard-text="#5c5d5b"> </td><td>Gunmetal </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="wind-chime" data-clipboard-text="#cac5c2"> </td><td>Wind chime </td></tr>
// <tr><td className="paloma" data-clipboard-text="#9f9c99"> </td><td>Paloma </td></tr>
// <tr><td className="charcoal-gray" data-clipboard-text="#6c6868"> </td><td>Charcoal gray </td></tr>
// <tr><td className="steel-gray" data-clipboard-text="#726f70"> </td><td>Steel gray </td></tr>
// <tr><td className="pewter" data-clipboard-text="#666564"> </td><td>Pewter </td></tr>
// <tr><td className="castlerock" data-clipboard-text="#5f5e62"> </td><td>Castlerock </td></tr>
// <tr><td className="nine-iron" data-clipboard-text="#46434a"> </td><td>Nine iron </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="ash" data-clipboard-text="#a09998"> </td><td>Ash </td></tr>
// <tr><td className="cloudburst" data-clipboard-text="#837f7f"> </td><td>Cloudburst </td></tr>
// <tr><td className="frost-gray" data-clipboard-text="#848283"> </td><td>Frost gray </td></tr>
// <tr><td className="excalibur" data-clipboard-text="#676168"> </td><td>Excalibur </td></tr>
// <tr><td className="dark-gull-gray" data-clipboard-text="#625d5d"> </td><td>Dark gull gray </td></tr>
// <tr><td className="rabbit" data-clipboard-text="#5f575c"> </td><td>Rabbit </td></tr>
// <tr><td className="shale" data-clipboard-text="#4a3f41"> </td><td>Shale </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="fossil" data-clipboard-text="#806f63"> </td><td>Fossil </td></tr>
// <tr><td className="major-brown" data-clipboard-text="#5b5149"> </td><td>Major brown </td></tr>
// <tr><td className="chocolate-chip" data-clipboard-text="#685a4e"> </td><td>Chocolate chip </td></tr>
// <tr><td className="canteen" data-clipboard-text="#5e5347"> </td><td>Canteen </td></tr>
// <tr><td className="stone-gray" data-clipboard-text="#685e4f"> </td><td>Stone gray </td></tr>
// <tr><td className="capers" data-clipboard-text="#695e4b"> </td><td>Capers </td></tr>
// <tr><td className="beech" data-clipboard-text="#5b4f3b"> </td><td>Beech </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="tarmac" data-clipboard-text="#5a5348"> </td><td>Tarmac </td></tr>
// <tr><td className="wren" data-clipboard-text="#4a4139"> </td><td>Wren </td></tr>
// <tr><td className="black-olive" data-clipboard-text="#48413b"> </td><td>Black olive </td></tr>
// <tr><td className="beluga" data-clipboard-text="#4a4843"> </td><td>Beluga </td></tr>
// <tr><td className="black-ink" data-clipboard-text="#44413c"> </td><td>Black ink </td></tr>
// <tr><td className="peat" data-clipboard-text="#3b3a36"> </td><td>Peat </td></tr>
// <tr><td className="jet-set" data-clipboard-text="#262c2a"> </td><td>Jet set </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="iron" data-clipboard-text="#736460"> </td><td>Iron </td></tr>
// <tr><td className="plum-kitten" data-clipboard-text="#625b5c"> </td><td>Plum kitten </td></tr>
// <tr><td className="turkish-coffee" data-clipboard-text="#483f39"> </td><td>Turkish coffee </td></tr>
// <tr><td className="black-coffee" data-clipboard-text="#3b302f"> </td><td>Black coffee </td></tr>
// <tr><td className="after-dark" data-clipboard-text="#3c3535"> </td><td>After dark </td></tr>
// <tr><td className="licorice" data-clipboard-text="#3a3536"> </td><td>Licorice </td></tr>
// <tr><td className="raven" data-clipboard-text="#413e3d"> </td><td>Raven </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="jet-black" data-clipboard-text="#2d2c2f"> </td><td>Jet black </td></tr>
// <tr><td className="phantom" data-clipboard-text="#39373b"> </td><td>Phantom </td></tr>
// <tr><td className="stretch-limo" data-clipboard-text="#2b2c30"> </td><td>Stretch limo </td></tr>
// <tr><td className="moonless-night" data-clipboard-text="#2f2d30"> </td><td>Moonless night </td></tr>
// <tr><td className="caviar" data-clipboard-text="#292a2d"> </td><td>Caviar </td></tr>
// <tr><td className="pirate-black" data-clipboard-text="#363838"> </td><td>Pirate black </td></tr>
// <tr><td className="anthracite" data-clipboard-text="#28282d"> </td><td>Anthracite </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="vanilla-cream" data-clipboard-text="#f4d8c6"> </td><td>Vanilla cream </td></tr>
// <tr><td className="dawn" data-clipboard-text="#ebd2b7"> </td><td>Dawn </td></tr>
// <tr><td className="gray-sand" data-clipboard-text="#e5ccaf"> </td><td>Gray sand </td></tr>
// <tr><td className="autumn-blonde" data-clipboard-text="#eed0ae"> </td><td>Autumn blonde </td></tr>
// <tr><td className="apricot-illusion" data-clipboard-text="#e2c4a6"> </td><td>Apricot illusion </td></tr>
// <tr><td className="mellow-buff" data-clipboard-text="#d8b998"> </td><td>Mellow buff </td></tr>
// <tr><td className="sheepskin" data-clipboard-text="#dab58f"> </td><td>Sheepskin </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="almond-buff" data-clipboard-text="#ccb390"> </td><td>Almond buff </td></tr>
// <tr><td className="beige" data-clipboard-text="#d5ba98"> </td><td>Beige </td></tr>
// <tr><td className="sand" data-clipboard-text="#cca67f"> </td><td>Sand </td></tr>
// <tr><td className="latte" data-clipboard-text="#c5a582"> </td><td>Latte </td></tr>
// <tr><td className="tan" data-clipboard-text="#b69574"> </td><td>Tan </td></tr>
// <tr><td className="doe" data-clipboard-text="#b98e68"> </td><td>Doe </td></tr>
// <tr><td className="indian-tan" data-clipboard-text="#ad8567"> </td><td>Indian tan </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="safari" data-clipboard-text="#baaa91"> </td><td>Safari </td></tr>
// <tr><td className="candied-ginger" data-clipboard-text="#bfa387"> </td><td>Candied ginger </td></tr>
// <tr><td className="warm-sand" data-clipboard-text="#c5ae91"> </td><td>Warm sand </td></tr>
// <tr><td className="cuban-sand" data-clipboard-text="#c1a68d"> </td><td>Cuban sand </td></tr>
// <tr><td className="nougat" data-clipboard-text="#b69885"> </td><td>Nougat </td></tr>
// <tr><td className="natural" data-clipboard-text="#aa907d"> </td><td>Natural </td></tr>
// <tr><td className="nomad" data-clipboard-text="#b49f89"> </td><td>Nomad </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="frozen-dew" data-clipboard-text="#d8cfb2"> </td><td>Frozen dew </td></tr>
// <tr><td className="bleached-sand" data-clipboard-text="#daccb4"> </td><td>Bleached sand </td></tr>
// <tr><td className="pebble" data-clipboard-text="#cab698"> </td><td>Pebble </td></tr>
// <tr><td className="croissant" data-clipboard-text="#c4ab86"> </td><td>Croissant </td></tr>
// <tr><td className="incense" data-clipboard-text="#af9a7e"> </td><td>Incense </td></tr>
// <tr><td className="cornstalk" data-clipboard-text="#a9947a"> </td><td>Cornstalk </td></tr>
// <tr><td className="tannin" data-clipboard-text="#a68a6d"> </td><td>Tannin </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="green-haze" data-clipboard-text="#cac4a4"> </td><td>Green haze </td></tr>
// <tr><td className="mojave-desert" data-clipboard-text="#c7b595"> </td><td>Mojave desert </td></tr>
// <tr><td className="taos-taupe" data-clipboard-text="#bfa77f"> </td><td>Taos taupe </td></tr>
// <tr><td className="lark" data-clipboard-text="#b89b72"> </td><td>Lark </td></tr>
// <tr><td className="kelp" data-clipboard-text="#988467"> </td><td>Kelp </td></tr>
// <tr><td className="antique-bronze" data-clipboard-text="#907954"> </td><td>Antique bronze </td></tr>
// <tr><td className="dull-gold" data-clipboard-text="#8a6f48"> </td><td>Dull gold </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="brown-sugar" data-clipboard-text="#a17249"> </td><td>Brown sugar </td></tr>
// <tr><td className="chipmunk" data-clipboard-text="#976f4c"> </td><td>Chipmunk </td></tr>
// <tr><td className="tobacco-brown" data-clipboard-text="#9a7352"> </td><td>Tobacco brown </td></tr>
// <tr><td className="bison" data-clipboard-text="#6e4f3a"> </td><td>Bison </td></tr>
// <tr><td className="monks-robe" data-clipboard-text="#704822"> </td><td>Monk's robe </td></tr>
// <tr><td className="dachshund" data-clipboard-text="#704f37"> </td><td>Dachshund </td></tr>
// <tr><td className="toffee" data-clipboard-text="#755139"> </td><td>Toffee </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="aztec" data-clipboard-text="#7a5747"> </td><td>Aztec </td></tr>
// <tr><td className="cocoa-brown" data-clipboard-text="#6c5043"> </td><td>Cocoa brown </td></tr>
// <tr><td className="partridge" data-clipboard-text="#725440"> </td><td>Partridge </td></tr>
// <tr><td className="friar-brown" data-clipboard-text="#6e493a"> </td><td>Friar brown </td></tr>
// <tr><td className="mustang" data-clipboard-text="#684b40"> </td><td>Mustang </td></tr>
// <tr><td className="pinecone" data-clipboard-text="#61473b"> </td><td>Pinecone </td></tr>
// <tr><td className="potting-soil" data-clipboard-text="#54392d"> </td><td>Potting soil </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="ermine" data-clipboard-text="#836b4f"> </td><td>Ermine </td></tr>
// <tr><td className="otter" data-clipboard-text="#7f674f"> </td><td>Otter </td></tr>
// <tr><td className="kangaroo" data-clipboard-text="#725e43"> </td><td>Kangaroo </td></tr>
// <tr><td className="sepia" data-clipboard-text="#6b543e"> </td><td>Sepia </td></tr>
// <tr><td className="coffee-liqueur" data-clipboard-text="#6a513b"> </td><td>Coffee liqueur </td></tr>
// <tr><td className="desert-palm" data-clipboard-text="#5a4632"> </td><td>Desert palm </td></tr>
// <tr><td className="teak" data-clipboard-text="#655341"> </td><td>Teak </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="shitake" data-clipboard-text="#736253"> </td><td>Shitake </td></tr>
// <tr><td className="cub" data-clipboard-text="#6e5c4b"> </td><td>Cub </td></tr>
// <tr><td className="carafe" data-clipboard-text="#5d473a"> </td><td>Carafe </td></tr>
// <tr><td className="dark-earth" data-clipboard-text="#5c4939"> </td><td>Dark earth </td></tr>
// <tr><td className="slate-black" data-clipboard-text="#4b3d33"> </td><td>Slate black </td></tr>
// <tr><td className="chocolate-brown" data-clipboard-text="#4e403b"> </td><td>Chocolate brown </td></tr>
// <tr><td className="demitasse" data-clipboard-text="#40342b"> </td><td>Demitasse </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="deep-taupe" data-clipboard-text="#7b6660"> </td><td>Deep taupe </td></tr>
// <tr><td className="shopping-bag" data-clipboard-text="#5a4743"> </td><td>Shopping bag </td></tr>
// <tr><td className="chestnut" data-clipboard-text="#584039"> </td><td>Chestnut </td></tr>
// <tr><td className="bracken" data-clipboard-text="#4f3f3b"> </td><td>Bracken </td></tr>
// <tr><td className="seal-brown" data-clipboard-text="#493b39"> </td><td>Seal brown </td></tr>
// <tr><td className="java" data-clipboard-text="#433331"> </td><td>Java </td></tr>
// <tr><td className="coffee-bean" data-clipboard-text="#40312f"> </td><td>Coffee bean </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="mother-of-pearl" data-clipboard-text="#e9d4c3"> </td><td>Mother of pearl </td></tr>
// <tr><td className="pastel-rose-tan" data-clipboard-text="#e9d1bf"> </td><td>Pastel rose tan </td></tr>
// <tr><td className="novelle-peach" data-clipboard-text="#e7cfbd"> </td><td>Novelle peach </td></tr>
// <tr><td className="sun-kiss" data-clipboard-text="#ebd1bb"> </td><td>Sun kiss </td></tr>
// <tr><td className="ivory-cream" data-clipboard-text="#dac0a7"> </td><td>Ivory cream </td></tr>
// <tr><td className="shifting-sand" data-clipboard-text="#d8c0ad"> </td><td>Shifting sand </td></tr>
// <tr><td className="appleblossom" data-clipboard-text="#ddbca0"> </td><td>Appleblossom </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="eggnog" data-clipboard-text="#ece1d3"> </td><td>Eggnog </td></tr>
// <tr><td className="cream-tan" data-clipboard-text="#e4c7b8"> </td><td>Cream tan </td></tr>
// <tr><td className="sand-dollar" data-clipboard-text="#decdbe"> </td><td>Sand dollar </td></tr>
// <tr><td className="smoke-gray" data-clipboard-text="#cebaa8"> </td><td>Smoke gray </td></tr>
// <tr><td className="doeskin" data-clipboard-text="#bdab9b"> </td><td>Doeskin </td></tr>
// <tr><td className="sesame" data-clipboard-text="#baa38b"> </td><td>Sesame </td></tr>
// <tr><td className="light-taupe" data-clipboard-text="#b19d8d"> </td><td>Light taupe </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="warm-taupe" data-clipboard-text="#af9483"> </td><td>Warm taupe </td></tr>
// <tr><td className="stucco" data-clipboard-text="#a58d7f"> </td><td>Stucco </td></tr>
// <tr><td className="almondine" data-clipboard-text="#a78c8b"> </td><td>Almondine </td></tr>
// <tr><td className="chanterelle" data-clipboard-text="#a28776"> </td><td>Chanterelle </td></tr>
// <tr><td className="ginger-snap" data-clipboard-text="#977d70"> </td><td>Ginger snap </td></tr>
// <tr><td className="woodsmoke" data-clipboard-text="#947764"> </td><td>Woodsmoke </td></tr>
// <tr><td className="amphora" data-clipboard-text="#9f8672"> </td><td>Amphora </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="moonlight" data-clipboard-text="#c5b1a0"> </td><td>Moonlight </td></tr>
// <tr><td className="frappe" data-clipboard-text="#d1b7a0"> </td><td>Frappe </td></tr>
// <tr><td className="rugby-tan" data-clipboard-text="#c2a594"> </td><td>Rugby tan </td></tr>
// <tr><td className="roebuck" data-clipboard-text="#b09080"> </td><td>Roebuck </td></tr>
// <tr><td className="praline" data-clipboard-text="#ad8b75"> </td><td>Praline </td></tr>
// <tr><td className="burro" data-clipboard-text="#947764"> </td><td>Burro </td></tr>
// <tr><td className="beaver-fur" data-clipboard-text="#997867"> </td><td>Beaver fur </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="toasted-almond" data-clipboard-text="#d2b49c"> </td><td>Toasted almond </td></tr>
// <tr><td className="tawny-birch" data-clipboard-text="#ae856c"> </td><td>Tawny birch </td></tr>
// <tr><td className="macaroon" data-clipboard-text="#b38b71"> </td><td>Macaroon </td></tr>
// <tr><td className="tawny-brown" data-clipboard-text="#ab856f"> </td><td>Tawny brown </td></tr>
// <tr><td className="camel" data-clipboard-text="#b0846a"> </td><td>Camel </td></tr>
// <tr><td className="toast" data-clipboard-text="#ca9978"> </td><td>Toast </td></tr>
// <tr><td className="toasted-nut" data-clipboard-text="#c08768"> </td><td>Toasted nut </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="nude" data-clipboard-text="#f2d3bc"> </td><td>Nude </td></tr>
// <tr><td className="tender-peach" data-clipboard-text="#f8d5b8"> </td><td>Tender peach </td></tr>
// <tr><td className="alesan" data-clipboard-text="#f1ceb3"> </td><td>Alesan </td></tr>
// <tr><td className="pale-peach" data-clipboard-text="#fed1bd"> </td><td>Pale peach </td></tr>
// <tr><td className="peach-puree" data-clipboard-text="#efcfba"> </td><td>Peach puree </td></tr>
// <tr><td className="bellini" data-clipboard-text="#f4c9b1"> </td><td>Bellini </td></tr>
// <tr><td className="amberlight" data-clipboard-text="#e2bea2"> </td><td>Amberlight </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="peach-dust" data-clipboard-text="#f0d8cc"> </td><td>Peach dust </td></tr>
// <tr><td className="linen" data-clipboard-text="#edd2c0"> </td><td>Linen </td></tr>
// <tr><td className="scallop-shell" data-clipboard-text="#fbd8c9"> </td><td>Scallop shell </td></tr>
// <tr><td className="soft-pink" data-clipboard-text="#f2d8cd"> </td><td>Soft pink </td></tr>
// <tr><td className="pale-dogwood" data-clipboard-text="#edcdc2"> </td><td>Pale dogwood </td></tr>
// <tr><td className="silver-peony" data-clipboard-text="#e7cfc7"> </td><td>Silver peony </td></tr>
// <tr><td className="rose-dust" data-clipboard-text="#cdb2a5"> </td><td>Rose dust </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="shell" data-clipboard-text="#e1cfc6"> </td><td>Shell </td></tr>
// <tr><td className="whisper-pink" data-clipboard-text="#dacbbe"> </td><td>Whisper pink </td></tr>
// <tr><td className="pink-tint" data-clipboard-text="#dbcbbd"> </td><td>Pink tint </td></tr>
// <tr><td className="evening-sand" data-clipboard-text="#ddb6ab"> </td><td>Evening sand </td></tr>
// <tr><td className="sirocco" data-clipboard-text="#c39d88"> </td><td>Sirocco </td></tr>
// <tr><td className="brush" data-clipboard-text="#b99984"> </td><td>Brush </td></tr>
// <tr><td className="cafe-au-lait" data-clipboard-text="#ae8774"> </td><td>Cafe au lait </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="cameo-rose" data-clipboard-text="#d7b8ab"> </td><td>Cameo rose </td></tr>
// <tr><td className="pale-blush" data-clipboard-text="#e4bfb3"> </td><td>Pale blush </td></tr>
// <tr><td className="rose-cloud" data-clipboard-text="#dbb0a2"> </td><td>Rose cloud </td></tr>
// <tr><td className="spanish-villa" data-clipboard-text="#dfbaa9"> </td><td>Spanish villa </td></tr>
// <tr><td className="maple-sugar" data-clipboard-text="#c9a38d"> </td><td>Maple sugar </td></tr>
// <tr><td className="tuscany" data-clipboard-text="#be9785"> </td><td>Tuscany </td></tr>
// <tr><td className="cork" data-clipboard-text="#ba8671"> </td><td>Cork </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="bisque" data-clipboard-text="#edcab5"> </td><td>Bisque </td></tr>
// <tr><td className="almost-apricot" data-clipboard-text="#e5b39b"> </td><td>Almost apricot </td></tr>
// <tr><td className="pink-sand" data-clipboard-text="#dfb19b"> </td><td>Pink sand </td></tr>
// <tr><td className="peach-nougat" data-clipboard-text="#e6af91"> </td><td>Peach nougat </td></tr>
// <tr><td className="peach-bloom" data-clipboard-text="#d99b7c"> </td><td>Peach bloom </td></tr>
// <tr><td className="dusty-coral" data-clipboard-text="#d29b83"> </td><td>Dusty coral </td></tr>
// <tr><td className="cafe-creme" data-clipboard-text="#c79685"> </td><td>Cafe creme </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="sandstorm" data-clipboard-text="#bd8b69"> </td><td>Sandstorm </td></tr>
// <tr><td className="butterum" data-clipboard-text="#c68f65"> </td><td>Butterum </td></tr>
// <tr><td className="biscuit" data-clipboard-text="#b4835b"> </td><td>Biscuit </td></tr>
// <tr><td className="cashew" data-clipboard-text="#a47149"> </td><td>Cashew </td></tr>
// <tr><td className="almond" data-clipboard-text="#a7754d"> </td><td>Almond </td></tr>
// <tr><td className="lion" data-clipboard-text="#a0714f"> </td><td>Lion </td></tr>
// <tr><td className="thrush" data-clipboard-text="#936b4f"> </td><td>Thrush </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="mocha-mousse" data-clipboard-text="#a47864"> </td><td>Mocha mousse </td></tr>
// <tr><td className="pecan-brown" data-clipboard-text="#a36e51"> </td><td>Pecan brown </td></tr>
// <tr><td className="hazel" data-clipboard-text="#ae7250"> </td><td>Hazel </td></tr>
// <tr><td className="bran" data-clipboard-text="#a66e4a"> </td><td>Bran </td></tr>
// <tr><td className="adobe" data-clipboard-text="#a3623b"> </td><td>Adobe </td></tr>
// <tr><td className="leather-brown" data-clipboard-text="#97572b"> </td><td>Leather brown </td></tr>
// <tr><td className="glazed-ginger" data-clipboard-text="#91552b"> </td><td>Glazed ginger </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="sandstone" data-clipboard-text="#c48a69"> </td><td>Sandstone </td></tr>
// <tr><td className="caramel" data-clipboard-text="#c37c54"> </td><td>Caramel </td></tr>
// <tr><td className="amber-brown" data-clipboard-text="#a66646"> </td><td>Amber brown </td></tr>
// <tr><td className="sierra" data-clipboard-text="#985c41"> </td><td>Sierra </td></tr>
// <tr><td className="ginger-bread" data-clipboard-text="#8c4a2f"> </td><td>Ginger bread </td></tr>
// <tr><td className="mocha-bisque" data-clipboard-text="#8c543a"> </td><td>Mocha bisque </td></tr>
// <tr><td className="tortoise-shell" data-clipboard-text="#754734"> </td><td>Tortoise shell </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="pheasant" data-clipboard-text="#c68463"> </td><td>Pheasant </td></tr>
// <tr><td className="sunburn" data-clipboard-text="#b37256"> </td><td>Sunburn </td></tr>
// <tr><td className="raw-sienna" data-clipboard-text="#b9714f"> </td><td>Raw sienna </td></tr>
// <tr><td className="autumn-leaf" data-clipboard-text="#b56a4c"> </td><td>Autumn leaf </td></tr>
// <tr><td className="mecca-orange" data-clipboard-text="#bd5745"> </td><td>Mecca orange </td></tr>
// <tr><td className="rust" data-clipboard-text="#b55a30"> </td><td>Rust </td></tr>
// <tr><td className="bombay-brown" data-clipboard-text="#9f5130"> </td><td>Bombay brown </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="frosted-almond" data-clipboard-text="#d2c2ac"> </td><td>Frosted almond </td></tr>
// <tr><td className="gilded-beige" data-clipboard-text="#b39f8d"> </td><td>Gilded beige </td></tr>
// <tr><td className="pale-gold" data-clipboard-text="#bd9865"> </td><td>Pale gold </td></tr>
// <tr><td className="rich-gold" data-clipboard-text="#c8b273"> </td><td>Rich gold </td></tr>
// <tr><td className="copper" data-clipboard-text="#c47e5a"> </td><td>Copper </td></tr>
// <tr><td className="copper-coin" data-clipboard-text="#ba6b57"> </td><td>Copper coin </td></tr>
// <tr><td className="silver" data-clipboard-text="#a2a2a1"> </td><td>Silver </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="raw-umber" data-clipboard-text="#92705f"> </td><td>Raw umber </td></tr>
// <tr><td className="brownie" data-clipboard-text="#8f7265"> </td><td>Brownie </td></tr>
// <tr><td className="acorn" data-clipboard-text="#7e5e52"> </td><td>Acorn </td></tr>
// <tr><td className="clove" data-clipboard-text="#876155"> </td><td>Clove </td></tr>
// <tr><td className="carob-brown" data-clipboard-text="#855c4c"> </td><td>Carob brown </td></tr>
// <tr><td className="russet" data-clipboard-text="#8f5f50"> </td><td>Russet </td></tr>
// <tr><td className="rawhide" data-clipboard-text="#865e49"> </td><td>Rawhide </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="chutney" data-clipboard-text="#98594b"> </td><td>Chutney </td></tr>
// <tr><td className="baked-clay" data-clipboard-text="#9c5642"> </td><td>Baked clay </td></tr>
// <tr><td className="copper-brown" data-clipboard-text="#9a6051"> </td><td>Copper brown </td></tr>
// <tr><td className="brown-patina" data-clipboard-text="#834f3d"> </td><td>Brown patina </td></tr>
// <tr><td className="rustic-brown" data-clipboard-text="#855141"> </td><td>Rustic brown </td></tr>
// <tr><td className="coconut-shell" data-clipboard-text="#874e3c"> </td><td>Coconut shell </td></tr>
// <tr><td className="sequoia" data-clipboard-text="#804839"> </td><td>Sequoia </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="root-beer" data-clipboard-text="#714a41"> </td><td>Root beer </td></tr>
// <tr><td className="brunette" data-clipboard-text="#664238"> </td><td>Brunette </td></tr>
// <tr><td className="sable" data-clipboard-text="#6e403c"> </td><td>Sable </td></tr>
// <tr><td className="cinnamon" data-clipboard-text="#6b4139"> </td><td>Cinnamon </td></tr>
// <tr><td className="fudgesickle" data-clipboard-text="#63403a"> </td><td>Fudgesickle </td></tr>
// <tr><td className="mink" data-clipboard-text="#734b42"> </td><td>Mink </td></tr>
// <tr><td className="cappuccino" data-clipboard-text="#633f33"> </td><td>Cappuccino </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="cognac" data-clipboard-text="#8b645a"> </td><td>Cognac </td></tr>
// <tr><td className="nutmeg" data-clipboard-text="#7e5c54"> </td><td>Nutmeg </td></tr>
// <tr><td className="french-roast" data-clipboard-text="#58423f"> </td><td>French roast </td></tr>
// <tr><td className="deep-mahogany" data-clipboard-text="#553b39"> </td><td>Deep mahogany </td></tr>
// <tr><td className="rum-raisin" data-clipboard-text="#583432"> </td><td>Rum raisin </td></tr>
// <tr><td className="brown-stone" data-clipboard-text="#593c39"> </td><td>Brown stone </td></tr>
// <tr><td className="bitter-chocolate" data-clipboard-text="#503130"> </td><td>Bitter chocolate </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="mahogany" data-clipboard-text="#824d46"> </td><td>Mahogany </td></tr>
// <tr><td className="henna" data-clipboard-text="#7c423c"> </td><td>Henna </td></tr>
// <tr><td className="arabian-spice" data-clipboard-text="#884332"> </td><td>Arabian spice </td></tr>
// <tr><td className="hot-chocolate" data-clipboard-text="#683b39"> </td><td>Hot chocolate </td></tr>
// <tr><td className="russet-brown" data-clipboard-text="#743332"> </td><td>Russet brown </td></tr>
// <tr><td className="madder-brown" data-clipboard-text="#6a3331"> </td><td>Madder brown </td></tr>
// <tr><td className="andorra" data-clipboard-text="#603535"> </td><td>Andorra </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="afterglow" data-clipboard-text="#f3e6c9"> </td><td>Afterglow </td></tr>
// <tr><td className="transparent-yellow" data-clipboard-text="#f4ecc2"> </td><td>Transparent yellow </td></tr>
// <tr><td className="double-cream" data-clipboard-text="#f3e0ac"> </td><td>Double cream </td></tr>
// <tr><td className="sunlight" data-clipboard-text="#edd59e"> </td><td>Sunlight </td></tr>
// <tr><td className="straw" data-clipboard-text="#e0c992"> </td><td>Straw </td></tr>
// <tr><td className="jojoba" data-clipboard-text="#dabe81"> </td><td>Jojoba </td></tr>
// <tr><td className="rattan" data-clipboard-text="#d1b272"> </td><td>Rattan </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="boulder" data-clipboard-text="#d1be9b"> </td><td>Boulder </td></tr>
// <tr><td className="sea-mist" data-clipboard-text="#d8c9a3"> </td><td>Sea mist </td></tr>
// <tr><td className="reed-yellow" data-clipboard-text="#dcc99e"> </td><td>Reed yellow </td></tr>
// <tr><td className="chino-green" data-clipboard-text="#d9caa5"> </td><td>Chino green </td></tr>
// <tr><td className="parsnip" data-clipboard-text="#d6c69a"> </td><td>Parsnip </td></tr>
// <tr><td className="dusty-yellow" data-clipboard-text="#d4cc9a"> </td><td>Dusty yellow </td></tr>
// <tr><td className="silver-fern" data-clipboard-text="#bbaa7e"> </td><td>Silver fern </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="lemon-grass" data-clipboard-text="#dcd494"> </td><td>Lemon grass </td></tr>
// <tr><td className="raffia" data-clipboard-text="#dac483"> </td><td>Raffia </td></tr>
// <tr><td className="golden-mist" data-clipboard-text="#d5cd94"> </td><td>Golden mist </td></tr>
// <tr><td className="pampas" data-clipboard-text="#cfbb7b"> </td><td>Pampas </td></tr>
// <tr><td className="bamboo" data-clipboard-text="#d2b04c"> </td><td>Bamboo </td></tr>
// <tr><td className="cress-green" data-clipboard-text="#bca949"> </td><td>Cress green </td></tr>
// <tr><td className="olive-oil" data-clipboard-text="#a98b2d"> </td><td>Olive oil </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="dried-moss" data-clipboard-text="#ccb97e"> </td><td>Dried moss </td></tr>
// <tr><td className="celery" data-clipboard-text="#cec153"> </td><td>Celery </td></tr>
// <tr><td className="acacia" data-clipboard-text="#dacd65"> </td><td>Acacia </td></tr>
// <tr><td className="sulphur" data-clipboard-text="#ddb614"> </td><td>Sulphur </td></tr>
// <tr><td className="oil-yellow" data-clipboard-text="#c4a647"> </td><td>Oil yellow </td></tr>
// <tr><td className="green-sulphur" data-clipboard-text="#ae8e2c"> </td><td>Green sulphur </td></tr>
// <tr><td className="golden-palm" data-clipboard-text="#aa8805"> </td><td>Golden palm </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="cocoon" data-clipboard-text="#c9b27c"> </td><td>Cocoon </td></tr>
// <tr><td className="hemp" data-clipboard-text="#c0ad7c"> </td><td>Hemp </td></tr>
// <tr><td className="southern-moss" data-clipboard-text="#bca66a"> </td><td>Southern moss </td></tr>
// <tr><td className="olivenite" data-clipboard-text="#c1a65c"> </td><td>Olivenite </td></tr>
// <tr><td className="golden-green" data-clipboard-text="#bdb369"> </td><td>Golden green </td></tr>
// <tr><td className="antique-gold" data-clipboard-text="#b59e5f"> </td><td>Antique gold </td></tr>
// <tr><td className="burnished-gold" data-clipboard-text="#aa9855"> </td><td>Burnished gold </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="french-vanilla" data-clipboard-text="#efe1a7"> </td><td>French vanilla </td></tr>
// <tr><td className="pastel-yellow" data-clipboard-text="#f2e6b1"> </td><td>Pastel yellow </td></tr>
// <tr><td className="tender-yellow" data-clipboard-text="#ededb7"> </td><td>Tender yellow </td></tr>
// <tr><td className="wax-yellow" data-clipboard-text="#ede9ad"> </td><td>Wax yellow </td></tr>
// <tr><td className="lemonade" data-clipboard-text="#f0e79d"> </td><td>Lemonade </td></tr>
// <tr><td className="elfin-yellow" data-clipboard-text="#eeea97"> </td><td>Elfin yellow </td></tr>
// <tr><td className="limelight" data-clipboard-text="#f0e87d"> </td><td>Limelight </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="dusky-citron" data-clipboard-text="#e3cc81"> </td><td>Dusky citron </td></tr>
// <tr><td className="muted-lime" data-clipboard-text="#d1c87c"> </td><td>Muted lime </td></tr>
// <tr><td className="endive" data-clipboard-text="#d2cc81"> </td><td>Endive </td></tr>
// <tr><td className="custard" data-clipboard-text="#e5d68e"> </td><td>Custard </td></tr>
// <tr><td className="canary-yellow" data-clipboard-text="#dfd87e"> </td><td>Canary yellow </td></tr>
// <tr><td className="yellow-cream" data-clipboard-text="#efdc75"> </td><td>Yellow cream </td></tr>
// <tr><td className="cream-gold" data-clipboard-text="#dec05f"> </td><td>Cream gold </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="aurora" data-clipboard-text="#eddd59"> </td><td>Aurora </td></tr>
// <tr><td className="green-sheen" data-clipboard-text="#d9ce52"> </td><td>Green sheen </td></tr>
// <tr><td className="maize" data-clipboard-text="#eec843"> </td><td>Maize </td></tr>
// <tr><td className="blazing-yellow" data-clipboard-text="#fee715"> </td><td>Blazing yellow </td></tr>
// <tr><td className="buttercup" data-clipboard-text="#fae03c"> </td><td>Buttercup </td></tr>
// <tr><td className="empire-yellow" data-clipboard-text="#f7d000"> </td><td>Empire yellow </td></tr>
// <tr><td className="lemon" data-clipboard-text="#f3bf08"> </td><td>Lemon </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="mimosa" data-clipboard-text="#f0c05a"> </td><td>Mimosa </td></tr>
// <tr><td className="aspen-gold" data-clipboard-text="#ffd662"> </td><td>Aspen gold </td></tr>
// <tr><td className="dandelion" data-clipboard-text="#ffd02e"> </td><td>Dandelion </td></tr>
// <tr><td className="vibrant-yellow" data-clipboard-text="#ffda29"> </td><td>Vibrant yellow </td></tr>
// <tr><td className="cyber-yellow" data-clipboard-text="#ffd400"> </td><td>Cyber yellow </td></tr>
// <tr><td className="freesia" data-clipboard-text="#f3c12c"> </td><td>Freesia </td></tr>
// <tr><td className="lemon-chrome" data-clipboard-text="#ffc300"> </td><td>Lemon chrome </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="mellow-yellow" data-clipboard-text="#f0dd9d"> </td><td>Mellow yellow </td></tr>
// <tr><td className="pale-banana" data-clipboard-text="#fae199"> </td><td>Pale banana </td></tr>
// <tr><td className="popcorn" data-clipboard-text="#f8de8d"> </td><td>Popcorn </td></tr>
// <tr><td className="sunshine" data-clipboard-text="#fade85"> </td><td>Sunshine </td></tr>
// <tr><td className="lemon-drop" data-clipboard-text="#fdd878"> </td><td>Lemon drop </td></tr>
// <tr><td className="primrose-yellow" data-clipboard-text="#f6d155"> </td><td>Primrose yellow </td></tr>
// <tr><td className="super-lemon" data-clipboard-text="#e4bf45"> </td><td>Super lemon </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="misted-yellow" data-clipboard-text="#dab965"> </td><td>Misted yellow </td></tr>
// <tr><td className="sauterne" data-clipboard-text="#c5a253"> </td><td>Sauterne </td></tr>
// <tr><td className="honey" data-clipboard-text="#ba9238"> </td><td>Honey </td></tr>
// <tr><td className="arrowwood" data-clipboard-text="#bc8d1f"> </td><td>Arrowwood </td></tr>
// <tr><td className="tawny-olive" data-clipboard-text="#c4962c"> </td><td>Tawny olive </td></tr>
// <tr><td className="ceylon-yellow" data-clipboard-text="#d4ae40"> </td><td>Ceylon yellow </td></tr>
// <tr><td className="lemon-curry" data-clipboard-text="#cda323"> </td><td>Lemon curry </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="fall-leaf" data-clipboard-text="#c9a86a"> </td><td>Fall leaf </td></tr>
// <tr><td className="antelope" data-clipboard-text="#b19664"> </td><td>Antelope </td></tr>
// <tr><td className="mustard-gold" data-clipboard-text="#b08e51"> </td><td>Mustard gold </td></tr>
// <tr><td className="harvest-gold" data-clipboard-text="#b68a3a"> </td><td>Harvest gold </td></tr>
// <tr><td className="nugget-gold" data-clipboard-text="#c89720"> </td><td>Nugget gold </td></tr>
// <tr><td className="golden-spice" data-clipboard-text="#c6973f"> </td><td>Golden spice </td></tr>
// <tr><td className="golden-yellow" data-clipboard-text="#cb8e16"> </td><td>Golden yellow </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="ochre" data-clipboard-text="#d6af66"> </td><td>Ochre </td></tr>
// <tr><td className="tinsel" data-clipboard-text="#c3964d"> </td><td>Tinsel </td></tr>
// <tr><td className="bright-gold" data-clipboard-text="#cf9f52"> </td><td>Bright gold </td></tr>
// <tr><td className="honey-gold" data-clipboard-text="#d1a054"> </td><td>Honey gold </td></tr>
// <tr><td className="amber-gold" data-clipboard-text="#c19552"> </td><td>Amber gold </td></tr>
// <tr><td className="mineral-yellow" data-clipboard-text="#d39c43"> </td><td>Mineral yellow </td></tr>
// <tr><td className="narcissus" data-clipboard-text="#c39449"> </td><td>Narcissus </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="marzipan" data-clipboard-text="#d8c09d"> </td><td>Marzipan </td></tr>
// <tr><td className="curry" data-clipboard-text="#be9e6f"> </td><td>Curry </td></tr>
// <tr><td className="prairie-sand" data-clipboard-text="#b59a6a"> </td><td>Prairie sand </td></tr>
// <tr><td className="honey-mustard" data-clipboard-text="#b68f52"> </td><td>Honey mustard </td></tr>
// <tr><td className="wood-thrush" data-clipboard-text="#a47d43"> </td><td>Wood thrush </td></tr>
// <tr><td className="golden-brown" data-clipboard-text="#91672f"> </td><td>Golden brown </td></tr>
// <tr><td className="bronze-brown" data-clipboard-text="#825e2f"> </td><td>Bronze brown </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="apple-cinnamon" data-clipboard-text="#b0885a"> </td><td>Apple cinnamon </td></tr>
// <tr><td className="bone-brown" data-clipboard-text="#9d7446"> </td><td>Bone brown </td></tr>
// <tr><td className="dijon" data-clipboard-text="#97754c"> </td><td>Dijon </td></tr>
// <tr><td className="bistre" data-clipboard-text="#98754a"> </td><td>Bistre </td></tr>
// <tr><td className="medal-bronze" data-clipboard-text="#977547"> </td><td>Medal bronze </td></tr>
// <tr><td className="cumin" data-clipboard-text="#927240"> </td><td>Cumin </td></tr>
// <tr><td className="breen" data-clipboard-text="#795d34"> </td><td>Breen </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="snapdragon" data-clipboard-text="#fed777"> </td><td>Snapdragon </td></tr>
// <tr><td className="banana-cream" data-clipboard-text="#ffcf73"> </td><td>Banana cream </td></tr>
// <tr><td className="daffodil" data-clipboard-text="#fdc04e"> </td><td>Daffodil </td></tr>
// <tr><td className="yolk-yellow" data-clipboard-text="#e2b051"> </td><td>Yolk yellow </td></tr>
// <tr><td className="golden-rod" data-clipboard-text="#e2a829"> </td><td>Golden rod </td></tr>
// <tr><td className="old-gold" data-clipboard-text="#eca825"> </td><td>Old gold </td></tr>
// <tr><td className="spectra-yellow" data-clipboard-text="#f7b718"> </td><td>Spectra yellow </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="golden-haze" data-clipboard-text="#fbd897"> </td><td>Golden haze </td></tr>
// <tr><td className="sahara-sun" data-clipboard-text="#dfc08a"> </td><td>Sahara sun </td></tr>
// <tr><td className="new-wheat" data-clipboard-text="#d7b57f"> </td><td>New wheat </td></tr>
// <tr><td className="cornsilk" data-clipboard-text="#edc373"> </td><td>Cornsilk </td></tr>
// <tr><td className="buff-yellow" data-clipboard-text="#f1bf70"> </td><td>Buff yellow </td></tr>
// <tr><td className="sunset-gold" data-clipboard-text="#f7c46c"> </td><td>Sunset gold </td></tr>
// <tr><td className="golden-cream" data-clipboard-text="#f7b768"> </td><td>Golden cream </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="impala" data-clipboard-text="#f8ce97"> </td><td>Impala </td></tr>
// <tr><td className="flax" data-clipboard-text="#ffc87d"> </td><td>Flax </td></tr>
// <tr><td className="pale-marigold" data-clipboard-text="#ffc66e"> </td><td>Pale marigold </td></tr>
// <tr><td className="amber-yellow" data-clipboard-text="#fab75a"> </td><td>Amber yellow </td></tr>
// <tr><td className="amber" data-clipboard-text="#efad55"> </td><td>Amber </td></tr>
// <tr><td className="golden-apricot" data-clipboard-text="#dda758"> </td><td>Golden apricot </td></tr>
// <tr><td className="beeswax" data-clipboard-text="#eba851"> </td><td>Beeswax </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="banana" data-clipboard-text="#fcb953"> </td><td>Banana </td></tr>
// <tr><td className="citrus" data-clipboard-text="#f9ac2f"> </td><td>Citrus </td></tr>
// <tr><td className="golden-glow" data-clipboard-text="#d99938"> </td><td>Golden glow </td></tr>
// <tr><td className="artisans-gold" data-clipboard-text="#f2ab46"> </td><td>Artisan's gold </td></tr>
// <tr><td className="sunflower" data-clipboard-text="#d39237"> </td><td>Sunflower </td></tr>
// <tr><td className="buckthorn-brown" data-clipboard-text="#a76f1f"> </td><td>Buckthorn brown </td></tr>
// <tr><td className="cathay-spice" data-clipboard-text="#99642c"> </td><td>Cathay spice </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="taffy" data-clipboard-text="#c39b6a"> </td><td>Taffy </td></tr>
// <tr><td className="oak-buff" data-clipboard-text="#cf9c63"> </td><td>Oak buff </td></tr>
// <tr><td className="honey-yellow" data-clipboard-text="#ca9456"> </td><td>Honey yellow </td></tr>
// <tr><td className="spruce-yellow" data-clipboard-text="#be8a4a"> </td><td>Spruce yellow </td></tr>
// <tr><td className="inca-gold" data-clipboard-text="#bb7a2c"> </td><td>Inca gold </td></tr>
// <tr><td className="sudan-brown" data-clipboard-text="#ac6b29"> </td><td>Sudan brown </td></tr>
// <tr><td className="rubber" data-clipboard-text="#815b37"> </td><td>Rubber </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="wheat" data-clipboard-text="#dec5a5"> </td><td>Wheat </td></tr>
// <tr><td className="honey-peach" data-clipboard-text="#dcbd9e"> </td><td>Honey peach </td></tr>
// <tr><td className="desert-dust" data-clipboard-text="#e3bc8e"> </td><td>Desert dust </td></tr>
// <tr><td className="golden-straw" data-clipboard-text="#e6bd8f"> </td><td>Golden straw </td></tr>
// <tr><td className="buff" data-clipboard-text="#ebc396"> </td><td>Buff </td></tr>
// <tr><td className="desert-mist" data-clipboard-text="#e0b589"> </td><td>Desert mist </td></tr>
// <tr><td className="clay" data-clipboard-text="#d2a172"> </td><td>Clay </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="golden-fleece" data-clipboard-text="#f2d1a0"> </td><td>Golden fleece </td></tr>
// <tr><td className="apricot-sherbet" data-clipboard-text="#facd9e"> </td><td>Apricot sherbet </td></tr>
// <tr><td className="sunburst" data-clipboard-text="#f6c289"> </td><td>Sunburst </td></tr>
// <tr><td className="apricot-cream" data-clipboard-text="#f1bd89"> </td><td>Apricot cream </td></tr>
// <tr><td className="buff-orange" data-clipboard-text="#ffbb7c"> </td><td>Buff orange </td></tr>
// <tr><td className="chamois" data-clipboard-text="#f7b26a"> </td><td>Chamois </td></tr>
// <tr><td className="warm-apricot" data-clipboard-text="#ffb865"> </td><td>Warm apricot </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="marigold" data-clipboard-text="#fadc53"> </td><td>Marigold </td></tr>
// <tr><td className="golden-nugget" data-clipboard-text="#db9b59"> </td><td>Golden nugget </td></tr>
// <tr><td className="butterscotch" data-clipboard-text="#e19640"> </td><td>Butterscotch </td></tr>
// <tr><td className="nugget" data-clipboard-text="#cf8848"> </td><td>Nugget </td></tr>
// <tr><td className="buckskin" data-clipboard-text="#d18e54"> </td><td>Buckskin </td></tr>
// <tr><td className="yam" data-clipboard-text="#d0893f"> </td><td>Yam </td></tr>
// <tr><td className="golden-oak" data-clipboard-text="#be752d"> </td><td>Golden oak </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="gold-fusion" data-clipboard-text="#ffb000"> </td><td>Gold fusion </td></tr>
// <tr><td className="saffron" data-clipboard-text="#ffa500"> </td><td>Saffron </td></tr>
// <tr><td className="cadmium-yellow" data-clipboard-text="#ee9626"> </td><td>Cadmium yellow </td></tr>
// <tr><td className="zinnia" data-clipboard-text="#ffa010"> </td><td>Zinnia </td></tr>
// <tr><td className="radiant-yellow" data-clipboard-text="#fc9e21"> </td><td>Radiant yellow </td></tr>
// <tr><td className="apricot" data-clipboard-text="#f19035"> </td><td>Apricot </td></tr>
// <tr><td className="dark-cheddar" data-clipboard-text="#e08119"> </td><td>Dark cheddar </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="apricot-ice" data-clipboard-text="#fbbe99"> </td><td>Apricot ice </td></tr>
// <tr><td className="apricot-nectar" data-clipboard-text="#ecaa79"> </td><td>Apricot nectar </td></tr>
// <tr><td className="gold-earth" data-clipboard-text="#dd9c6b"> </td><td>Gold earth </td></tr>
// <tr><td className="apricot-tan" data-clipboard-text="#dd9760"> </td><td>Apricot tan </td></tr>
// <tr><td className="topaz" data-clipboard-text="#d08344"> </td><td>Topaz </td></tr>
// <tr><td className="golden-ochre" data-clipboard-text="#c77943"> </td><td>Golden ochre </td></tr>
// <tr><td className="apricot-buff" data-clipboard-text="#cd7e4d"> </td><td>Apricot buff </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="peach-cobbler" data-clipboard-text="#ffb181"> </td><td>Peach cobbler </td></tr>
// <tr><td className="salmon-buff" data-clipboard-text="#feaa7b"> </td><td>Salmon buff </td></tr>
// <tr><td className="pumpkin" data-clipboard-text="#f5a26f"> </td><td>Pumpkin </td></tr>
// <tr><td className="mock-orange" data-clipboard-text="#ffa368"> </td><td>Mock orange </td></tr>
// <tr><td className="muskmelon" data-clipboard-text="#ec935e"> </td><td>Muskmelon </td></tr>
// <tr><td className="copper-tan" data-clipboard-text="#de8e65"> </td><td>Copper tan </td></tr>
// <tr><td className="coral-gold" data-clipboard-text="#d27d56"> </td><td>Coral gold </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="russet-orange" data-clipboard-text="#e47127"> </td><td>Russet orange </td></tr>
// <tr><td className="orange-ochre" data-clipboard-text="#dc793a"> </td><td>Orange ochre </td></tr>
// <tr><td className="amberglow" data-clipboard-text="#dc793e"> </td><td>Amberglow </td></tr>
// <tr><td className="jaffa-orange" data-clipboard-text="#d86d39"> </td><td>Jaffa orange </td></tr>
// <tr><td className="apricot-orange" data-clipboard-text="#c86b3c"> </td><td>Apricot orange </td></tr>
// <tr><td className="burnt-orange" data-clipboard-text="#c86733"> </td><td>Burnt orange </td></tr>
// <tr><td className="harvest-pumpkin" data-clipboard-text="#d56231"> </td><td>Harvest pumpkin </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="blazing-orange" data-clipboard-text="#ffa64f"> </td><td>Blazing orange </td></tr>
// <tr><td className="flame-orange" data-clipboard-text="#fb8b23"> </td><td>Flame orange </td></tr>
// <tr><td className="bright-marigold" data-clipboard-text="#ff8d00"> </td><td>Bright marigold </td></tr>
// <tr><td className="autumn-glory" data-clipboard-text="#ff8812"> </td><td>Autumn glory </td></tr>
// <tr><td className="sun-orange" data-clipboard-text="#f48037"> </td><td>Sun orange </td></tr>
// <tr><td className="persimmon-orange" data-clipboard-text="#f47327"> </td><td>Persimmon orange </td></tr>
// <tr><td className="orange-popsicle" data-clipboard-text="#ff7913"> </td><td>Orange popsicle </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="autumn-sunset" data-clipboard-text="#f38554"> </td><td>Autumn sunset </td></tr>
// <tr><td className="tangerine" data-clipboard-text="#f88f58"> </td><td>Tangerine </td></tr>
// <tr><td className="bird-of-paradise" data-clipboard-text="#ff8c55"> </td><td>Bird of paradise </td></tr>
// <tr><td className="orange-peel" data-clipboard-text="#fa7a35"> </td><td>Orange peel </td></tr>
// <tr><td className="mandarin-orange" data-clipboard-text="#ec6a37"> </td><td>Mandarin orange </td></tr>
// <tr><td className="golden-poppy" data-clipboard-text="#f56733"> </td><td>Golden poppy </td></tr>
// <tr><td className="vibrant-orange" data-clipboard-text="#ff7420"> </td><td>Vibrant orange </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="nectarine" data-clipboard-text="#ff8656"> </td><td>Nectarine </td></tr>
// <tr><td className="coral-rose" data-clipboard-text="#f3774d"> </td><td>Coral rose </td></tr>
// <tr><td className="carrot" data-clipboard-text="#fd6f3b"> </td><td>Carrot </td></tr>
// <tr><td className="firecracker" data-clipboard-text="#f36944"> </td><td>Firecracker </td></tr>
// <tr><td className="red-orange" data-clipboard-text="#f05627"> </td><td>Red orange </td></tr>
// <tr><td className="vermillion-orange" data-clipboard-text="#f9633b"> </td><td>Vermillion orange </td></tr>
// <tr><td className="flame" data-clipboard-text="#f2552c"> </td><td>Flame </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="creampuff" data-clipboard-text="#ffcda8"> </td><td>Creampuff </td></tr>
// <tr><td className="bleached-apricot" data-clipboard-text="#fccaac"> </td><td>Bleached apricot </td></tr>
// <tr><td className="almond-cream" data-clipboard-text="#f4c29f"> </td><td>Almond cream </td></tr>
// <tr><td className="beach-sand" data-clipboard-text="#fbb995"> </td><td>Beach sand </td></tr>
// <tr><td className="cream-blush" data-clipboard-text="#f8c19a"> </td><td>Cream blush </td></tr>
// <tr><td className="caramel-cream" data-clipboard-text="#f4ba94"> </td><td>Caramel cream </td></tr>
// <tr><td className="peach-fuzz" data-clipboard-text="#ffbe98"> </td><td>Peach fuzz </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="prairie-sunset" data-clipboard-text="#ffbb9e"> </td><td>Prairie sunset </td></tr>
// <tr><td className="coral-sands" data-clipboard-text="#edaa86"> </td><td>Coral sands </td></tr>
// <tr><td className="apricot-wash" data-clipboard-text="#fbac82"> </td><td>Apricot wash </td></tr>
// <tr><td className="canyon-sunset" data-clipboard-text="#e1927a"> </td><td>Canyon sunset </td></tr>
// <tr><td className="brandied-melon" data-clipboard-text="#ce7b5b"> </td><td>Brandied melon </td></tr>
// <tr><td className="carnelian" data-clipboard-text="#ce785d"> </td><td>Carnelian </td></tr>
// <tr><td className="mango" data-clipboard-text="#b75e41"> </td><td>Mango </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="peach" data-clipboard-text="#f2a987"> </td><td>Peach </td></tr>
// <tr><td className="cantaloupe" data-clipboard-text="#ffa177"> </td><td>Cantaloupe </td></tr>
// <tr><td className="coral-reef" data-clipboard-text="#faa181"> </td><td>Coral reef </td></tr>
// <tr><td className="shell-coral" data-clipboard-text="#ea9575"> </td><td>Shell coral </td></tr>
// <tr><td className="cadmium-orange" data-clipboard-text="#f99471"> </td><td>Cadmium orange </td></tr>
// <tr><td className="melon" data-clipboard-text="#fe8863"> </td><td>Melon </td></tr>
// <tr><td className="dusty-orange" data-clipboard-text="#e27a53"> </td><td>Dusty orange </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="arabesque" data-clipboard-text="#d16f52"> </td><td>Arabesque </td></tr>
// <tr><td className="langoustino" data-clipboard-text="#ca6c56"> </td><td>Langoustino </td></tr>
// <tr><td className="ginger" data-clipboard-text="#c96551"> </td><td>Ginger </td></tr>
// <tr><td className="flamingo" data-clipboard-text="#df7253"> </td><td>Flamingo </td></tr>
// <tr><td className="orange-rust" data-clipboard-text="#c25a3c"> </td><td>Orange rust </td></tr>
// <tr><td className="burnt-ochre" data-clipboard-text="#bb4f35"> </td><td>Burnt ochre </td></tr>
// <tr><td className="chili" data-clipboard-text="#be5141"> </td><td>Chili </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="ginger-spice" data-clipboard-text="#b65d48"> </td><td>Ginger spice </td></tr>
// <tr><td className="autumn-glaze" data-clipboard-text="#b3573f"> </td><td>Autumn glaze </td></tr>
// <tr><td className="auburn" data-clipboard-text="#a15843"> </td><td>Auburn </td></tr>
// <tr><td className="picante" data-clipboard-text="#8d3f2d"> </td><td>Picante </td></tr>
// <tr><td className="tandori-spice" data-clipboard-text="#9f4440"> </td><td>Tandori spice </td></tr>
// <tr><td className="cinnabar" data-clipboard-text="#9c453b"> </td><td>Cinnabar </td></tr>
// <tr><td className="bossa-nova" data-clipboard-text="#973a36"> </td><td>Bossa nova </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="tropical-peach" data-clipboard-text="#ffc4b2"> </td><td>Tropical peach </td></tr>
// <tr><td className="peach-parfait" data-clipboard-text="#f8bfa8"> </td><td>Peach parfait </td></tr>
// <tr><td className="coral-pink" data-clipboard-text="#e8a798"> </td><td>Coral pink </td></tr>
// <tr><td className="dusty-pink" data-clipboard-text="#deaa9b"> </td><td>Dusty pink </td></tr>
// <tr><td className="muted-clay" data-clipboard-text="#d29380"> </td><td>Muted clay </td></tr>
// <tr><td className="shrimp" data-clipboard-text="#e29a86"> </td><td>Shrimp </td></tr>
// <tr><td className="tawny-orange" data-clipboard-text="#d37f6f"> </td><td>Tawny orange </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="coral-haze" data-clipboard-text="#e38e84"> </td><td>Coral haze </td></tr>
// <tr><td className="canyon-clay" data-clipboard-text="#ce8477"> </td><td>Canyon clay </td></tr>
// <tr><td className="terra-cotta" data-clipboard-text="#d38377"> </td><td>Terra cotta </td></tr>
// <tr><td className="desert-sand" data-clipboard-text="#bd7b74"> </td><td>Desert sand </td></tr>
// <tr><td className="light-mahogany" data-clipboard-text="#ad6d68"> </td><td>Light mahogany </td></tr>
// <tr><td className="cedar-wood" data-clipboard-text="#a1655b"> </td><td>Cedar wood </td></tr>
// <tr><td className="withered-rose" data-clipboard-text="#a26666"> </td><td>Withered rose </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="rose-dawn" data-clipboard-text="#c2877b"> </td><td>Rose dawn </td></tr>
// <tr><td className="ash-rose" data-clipboard-text="#b5817d"> </td><td>Ash rose </td></tr>
// <tr><td className="old-rose" data-clipboard-text="#b47b77"> </td><td>Old rose </td></tr>
// <tr><td className="brick-dust" data-clipboard-text="#b07069"> </td><td>Brick dust </td></tr>
// <tr><td className="canyon-rose" data-clipboard-text="#af6c67"> </td><td>Canyon rose </td></tr>
// <tr><td className="dusty-cedar" data-clipboard-text="#ad5d5d"> </td><td>Dusty cedar </td></tr>
// <tr><td className="marsala" data-clipboard-text="#964f4c"> </td><td>Marsala </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="apricot-brandy" data-clipboard-text="#c26a5a"> </td><td>Apricot brandy </td></tr>
// <tr><td className="aragon" data-clipboard-text="#b06455"> </td><td>Aragon </td></tr>
// <tr><td className="hot-sauce" data-clipboard-text="#ab4f41"> </td><td>Hot sauce </td></tr>
// <tr><td className="bruschetta" data-clipboard-text="#a75949"> </td><td>Bruschetta </td></tr>
// <tr><td className="etruscan-red" data-clipboard-text="#a2574b"> </td><td>Etruscan red </td></tr>
// <tr><td className="redwood" data-clipboard-text="#a6594c"> </td><td>Redwood </td></tr>
// <tr><td className="burnt-brick" data-clipboard-text="#a14d3a"> </td><td>Burnt brick </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="faded-rose" data-clipboard-text="#bf6464"> </td><td>Faded rose </td></tr>
// <tr><td className="baked-apple" data-clipboard-text="#b34646"> </td><td>Baked apple </td></tr>
// <tr><td className="pompeian-red" data-clipboard-text="#a4292e"> </td><td>Pompeian red </td></tr>
// <tr><td className="ketchup" data-clipboard-text="#9a382d"> </td><td>Ketchup </td></tr>
// <tr><td className="red-ochre" data-clipboard-text="#913832"> </td><td>Red ochre </td></tr>
// <tr><td className="barn-red" data-clipboard-text="#8f423b"> </td><td>Barn red </td></tr>
// <tr><td className="burnt-henna" data-clipboard-text="#7e392f"> </td><td>Burnt henna </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="peach-pearl" data-clipboard-text="#ffb2a5"> </td><td>Peach pearl </td></tr>
// <tr><td className="peach-melba" data-clipboard-text="#fbbdaf"> </td><td>Peach melba </td></tr>
// <tr><td className="apricot-blush" data-clipboard-text="#feaea5"> </td><td>Apricot blush </td></tr>
// <tr><td className="peach-bud" data-clipboard-text="#fdb2ab"> </td><td>Peach bud </td></tr>
// <tr><td className="coral-almond" data-clipboard-text="#e29d94"> </td><td>Coral almond </td></tr>
// <tr><td className="lobster-bisque" data-clipboard-text="#dd9289"> </td><td>Lobster bisque </td></tr>
// <tr><td className="lantana" data-clipboard-text="#da7e7a"> </td><td>Lantana </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="peach-nectar" data-clipboard-text="#ffb59b"> </td><td>Peach nectar </td></tr>
// <tr><td className="salmon" data-clipboard-text="#faaa94"> </td><td>Salmon </td></tr>
// <tr><td className="peach-amber" data-clipboard-text="#fb9f93"> </td><td>Peach amber </td></tr>
// <tr><td className="desert-flower" data-clipboard-text="#ff9687"> </td><td>Desert flower </td></tr>
// <tr><td className="peach-pink" data-clipboard-text="#fa9a85"> </td><td>Peach pink </td></tr>
// <tr><td className="burnt-coral" data-clipboard-text="#e9897e"> </td><td>Burnt coral </td></tr>
// <tr><td className="crabapple" data-clipboard-text="#d77e70"> </td><td>Crabapple </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="papaya-punch" data-clipboard-text="#fca289"> </td><td>Papaya punch </td></tr>
// <tr><td className="fusion-coral" data-clipboard-text="#ff8576"> </td><td>Fusion coral </td></tr>
// <tr><td className="fresh-salmon" data-clipboard-text="#ff7f6a"> </td><td>Fresh salmon </td></tr>
// <tr><td className="persimmon" data-clipboard-text="#f67866"> </td><td>Persimmon </td></tr>
// <tr><td className="coral" data-clipboard-text="#ed7464"> </td><td>Coral </td></tr>
// <tr><td className="living-coral" data-clipboard-text="#ff6f61"> </td><td>Living coral </td></tr>
// <tr><td className="hot-coral" data-clipboard-text="#f35b53"> </td><td>Hot coral </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="shell-pink" data-clipboard-text="#f88180"> </td><td>Shell pink </td></tr>
// <tr><td className="georgia-peach" data-clipboard-text="#f97272"> </td><td>Georgia peach </td></tr>
// <tr><td className="sugar-coral" data-clipboard-text="#f56c73"> </td><td>Sugar coral </td></tr>
// <tr><td className="dubarry" data-clipboard-text="#f25f66"> </td><td>Dubarry </td></tr>
// <tr><td className="porcelain-rose" data-clipboard-text="#ea6b6a"> </td><td>Porcelain rose </td></tr>
// <tr><td className="spiced-coral" data-clipboard-text="#d75c5d"> </td><td>Spiced coral </td></tr>
// <tr><td className="deep-sea-coral" data-clipboard-text="#d9615b"> </td><td>Deep sea coral </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="rose-of-sharon" data-clipboard-text="#dc5b62"> </td><td>Rose of sharon </td></tr>
// <tr><td className="cayenne" data-clipboard-text="#e04951"> </td><td>Cayenne </td></tr>
// <tr><td className="hibiscus" data-clipboard-text="#dd3848"> </td><td>Hibiscus </td></tr>
// <tr><td className="poinsettia" data-clipboard-text="#cb3441"> </td><td>Poinsettia </td></tr>
// <tr><td className="chrysanthemum" data-clipboard-text="#be454f"> </td><td>Chrysanthemum </td></tr>
// <tr><td className="cranberry" data-clipboard-text="#bb4a4d"> </td><td>Cranberry </td></tr>
// <tr><td className="cardinal" data-clipboard-text="#ad3e48"> </td><td>Cardinal </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="tigerlily" data-clipboard-text="#e2583e"> </td><td>Tigerlily </td></tr>
// <tr><td className="grenadine" data-clipboard-text="#df3f32"> </td><td>Grenadine </td></tr>
// <tr><td className="mandarin-red" data-clipboard-text="#e74a33"> </td><td>Mandarin red </td></tr>
// <tr><td className="fiesta" data-clipboard-text="#dd4132"> </td><td>Fiesta </td></tr>
// <tr><td className="cherry-tomato" data-clipboard-text="#eb3c27"> </td><td>Cherry tomato </td></tr>
// <tr><td className="orange-com" data-clipboard-text="#da321c"> </td><td>Orange.com </td></tr>
// <tr><td className="spicy-orange" data-clipboard-text="#d73c26"> </td><td>Spicy orange </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="camellia" data-clipboard-text="#f6745f"> </td><td>Camellia </td></tr>
// <tr><td className="nasturtium" data-clipboard-text="#fe6347"> </td><td>Nasturtium </td></tr>
// <tr><td className="emberglow" data-clipboard-text="#ea6759"> </td><td>Emberglow </td></tr>
// <tr><td className="burnt-sienna" data-clipboard-text="#c65d52"> </td><td>Burnt sienna </td></tr>
// <tr><td className="paprika" data-clipboard-text="#ce4d42"> </td><td>Paprika </td></tr>
// <tr><td className="red-clay" data-clipboard-text="#c2452d"> </td><td>Red clay </td></tr>
// <tr><td className="molten-lava" data-clipboard-text="#b5332e"> </td><td>Molten lava </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="bittersweet" data-clipboard-text="#d93744"> </td><td>Bittersweet </td></tr>
// <tr><td className="poppy-red" data-clipboard-text="#dc343b"> </td><td>Poppy red </td></tr>
// <tr><td className="tomato" data-clipboard-text="#ce2939"> </td><td>Tomato </td></tr>
// <tr><td className="fiery-red" data-clipboard-text="#d01c1f"> </td><td>Fiery red </td></tr>
// <tr><td className="flame-scarlet" data-clipboard-text="#cd212a"> </td><td>Flame scarlet </td></tr>
// <tr><td className="high-risk-red" data-clipboard-text="#c71f2d"> </td><td>High risk red </td></tr>
// <tr><td className="aurora-red" data-clipboard-text="#b93a32"> </td><td>Aurora red </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="rococco-red" data-clipboard-text="#bb363f"> </td><td>Rococco red </td></tr>
// <tr><td className="tomato-puree" data-clipboard-text="#c53346"> </td><td>Tomato puree </td></tr>
// <tr><td className="lollipop" data-clipboard-text="#cc1c3b"> </td><td>Lollipop </td></tr>
// <tr><td className="ski-patrol" data-clipboard-text="#bb1237"> </td><td>Ski patrol </td></tr>
// <tr><td className="scarlet" data-clipboard-text="#bc2b3d"> </td><td>Scarlet </td></tr>
// <tr><td className="lipstick-red" data-clipboard-text="#b31a38"> </td><td>Lipstick red </td></tr>
// <tr><td className="crimson" data-clipboard-text="#ae0e36"> </td><td>Crimson </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="racing-red" data-clipboard-text="#bd162c"> </td><td>Racing red </td></tr>
// <tr><td className="mars-red" data-clipboard-text="#bc2731"> </td><td>Mars red </td></tr>
// <tr><td className="tango-red" data-clipboard-text="#ac0e2e"> </td><td>Tango red </td></tr>
// <tr><td className="chinese-red" data-clipboard-text="#be132d"> </td><td>Chinese red </td></tr>
// <tr><td className="ribbon-red" data-clipboard-text="#b92636"> </td><td>Ribbon red </td></tr>
// <tr><td className="true-red" data-clipboard-text="#bf1932"> </td><td>True red </td></tr>
// <tr><td className="chili-pepper" data-clipboard-text="#9b1b30"> </td><td>Chili pepper </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="quartz-pink" data-clipboard-text="#efa6aa"> </td><td>Quartz pink </td></tr>
// <tr><td className="pink-icing" data-clipboard-text="#eea0a6"> </td><td>Pink icing </td></tr>
// <tr><td className="blossom" data-clipboard-text="#f2b2ae"> </td><td>Blossom </td></tr>
// <tr><td className="peaches-n-cream" data-clipboard-text="#f4a6a3"> </td><td>Peaches n' cream </td></tr>
// <tr><td className="candlelight-peach" data-clipboard-text="#f8a39d"> </td><td>Candlelight peach </td></tr>
// <tr><td className="strawberry-ice" data-clipboard-text="#e78b90"> </td><td>Strawberry ice </td></tr>
// <tr><td className="peach-blossom" data-clipboard-text="#de8286"> </td><td>Peach blossom </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="flamingo-pink" data-clipboard-text="#f7969e"> </td><td>Flamingo pink </td></tr>
// <tr><td className="confetti" data-clipboard-text="#e6798e"> </td><td>Confetti </td></tr>
// <tr><td className="bubblegum" data-clipboard-text="#ea738d"> </td><td>Bubblegum </td></tr>
// <tr><td className="pink-lemonade" data-clipboard-text="#ee6d8a"> </td><td>Pink lemonade </td></tr>
// <tr><td className="camellia-rose" data-clipboard-text="#eb6081"> </td><td>Camellia rose </td></tr>
// <tr><td className="rapture-rose" data-clipboard-text="#d16277"> </td><td>Rapture rose </td></tr>
// <tr><td className="desert-rose" data-clipboard-text="#cf6977"> </td><td>Desert rose </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="geranium-pink" data-clipboard-text="#f6909d"> </td><td>Geranium pink </td></tr>
// <tr><td className="conch-shell" data-clipboard-text="#fc8f9b"> </td><td>Conch shell </td></tr>
// <tr><td className="salmon-rose" data-clipboard-text="#ff8d94"> </td><td>Salmon rose </td></tr>
// <tr><td className="strawberry-pink" data-clipboard-text="#f57f8e"> </td><td>Strawberry pink </td></tr>
// <tr><td className="sunkist-coral" data-clipboard-text="#ea6676"> </td><td>Sunkist coral </td></tr>
// <tr><td className="calypso-coral" data-clipboard-text="#ee5c6c"> </td><td>Calypso coral </td></tr>
// <tr><td className="tea-rose" data-clipboard-text="#dc7178"> </td><td>Tea rose </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="geranium" data-clipboard-text="#da3d58"> </td><td>Geranium </td></tr>
// <tr><td className="paradise-pink" data-clipboard-text="#e4445e"> </td><td>Paradise pink </td></tr>
// <tr><td className="teaberry" data-clipboard-text="#dc3855"> </td><td>Teaberry </td></tr>
// <tr><td className="rouge-red" data-clipboard-text="#e24666"> </td><td>Rouge red </td></tr>
// <tr><td className="raspberry" data-clipboard-text="#d32e5e"> </td><td>Raspberry </td></tr>
// <tr><td className="azalea" data-clipboard-text="#d42e5b"> </td><td>Azalea </td></tr>
// <tr><td className="virtual-pink" data-clipboard-text="#c6174e"> </td><td>Virtual pink </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="claret-red" data-clipboard-text="#c84c61"> </td><td>Claret red </td></tr>
// <tr><td className="raspberry-wine" data-clipboard-text="#b63753"> </td><td>Raspberry wine </td></tr>
// <tr><td className="rose-red" data-clipboard-text="#c92351"> </td><td>Rose red </td></tr>
// <tr><td className="barberry" data-clipboard-text="#bf1945"> </td><td>Barberry </td></tr>
// <tr><td className="bright-rose" data-clipboard-text="#c51959"> </td><td>Bright rose </td></tr>
// <tr><td className="persian-red" data-clipboard-text="#a21441"> </td><td>Persian red </td></tr>
// <tr><td className="cerise" data-clipboard-text="#a41247"> </td><td>Cerise </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="pink-lady" data-clipboard-text="#efc1d6"> </td><td>Pink lady </td></tr>
// <tr><td className="lilac-sachet" data-clipboard-text="#e9adca"> </td><td>Lilac sachet </td></tr>
// <tr><td className="prism-pink" data-clipboard-text="#f0a1bf"> </td><td>Prism pink </td></tr>
// <tr><td className="begonia-pink" data-clipboard-text="#ec9abe"> </td><td>Begonia pink </td></tr>
// <tr><td className="fuchsia-pink" data-clipboard-text="#df88b7"> </td><td>Fuchsia pink </td></tr>
// <tr><td className="rosebloom" data-clipboard-text="#e290b2"> </td><td>Rosebloom </td></tr>
// <tr><td className="ibis-rose" data-clipboard-text="#ca628f"> </td><td>Ibis rose </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="sachet-pink" data-clipboard-text="#f18aad"> </td><td>Sachet pink </td></tr>
// <tr><td className="wild-orchid" data-clipboard-text="#d979a2"> </td><td>Wild orchid </td></tr>
// <tr><td className="aurora-pink" data-clipboard-text="#e881a6"> </td><td>Aurora pink </td></tr>
// <tr><td className="chateau-rose" data-clipboard-text="#d2738f"> </td><td>Chateau rose </td></tr>
// <tr><td className="morning-glory" data-clipboard-text="#ee819f"> </td><td>Morning glory </td></tr>
// <tr><td className="azalea-pink" data-clipboard-text="#e96a97"> </td><td>Azalea pink </td></tr>
// <tr><td className="shocking-pink" data-clipboard-text="#de5b8c"> </td><td>Shocking pink </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="hot-pink" data-clipboard-text="#e55982"> </td><td>Hot pink </td></tr>
// <tr><td className="fandango-pink" data-clipboard-text="#e04f80"> </td><td>Fandango pink </td></tr>
// <tr><td className="honeysuckle" data-clipboard-text="#d94f70"> </td><td>Honeysuckle </td></tr>
// <tr><td className="raspberry-sorbet" data-clipboard-text="#d2386c"> </td><td>Raspberry sorbet </td></tr>
// <tr><td className="carmine" data-clipboard-text="#bc4869"> </td><td>Carmine </td></tr>
// <tr><td className="fuchsia-rose" data-clipboard-text="#c74375"> </td><td>Fuchsia rose </td></tr>
// <tr><td className="beetroot-purple" data-clipboard-text="#cf2d71"> </td><td>Beetroot purple </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="pink-carnation" data-clipboard-text="#ed7a9e"> </td><td>Pink carnation </td></tr>
// <tr><td className="carmine-rose" data-clipboard-text="#e35b8f"> </td><td>Carmine rose </td></tr>
// <tr><td className="magenta" data-clipboard-text="#d23c77"> </td><td>Magenta </td></tr>
// <tr><td className="pink-flambe" data-clipboard-text="#d3507a"> </td><td>Pink flambe </td></tr>
// <tr><td className="fuchsia-purple" data-clipboard-text="#d33479"> </td><td>Fuchsia purple </td></tr>
// <tr><td className="lilac-rose" data-clipboard-text="#bd4275"> </td><td>Lilac rose </td></tr>
// <tr><td className="very-berry" data-clipboard-text="#b73275"> </td><td>Very berry </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="super-pink" data-clipboard-text="#ce6ba4"> </td><td>Super pink </td></tr>
// <tr><td className="phlox-pink" data-clipboard-text="#ce5e9a"> </td><td>Phlox pink </td></tr>
// <tr><td className="raspberry-rose" data-clipboard-text="#cc4385"> </td><td>Raspberry rose </td></tr>
// <tr><td className="rose-violet" data-clipboard-text="#c0428a"> </td><td>Rose violet </td></tr>
// <tr><td className="fuchsia-red" data-clipboard-text="#ab3475"> </td><td>Fuchsia red </td></tr>
// <tr><td className="cactus-flower" data-clipboard-text="#a83e6c"> </td><td>Cactus flower </td></tr>
// <tr><td className="magenta-haze" data-clipboard-text="#9d446e"> </td><td>Magenta haze </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="shrinking-violet" data-clipboard-text="#f4e1e6"> </td><td>Shrinking violet </td></tr>
// <tr><td className="primrose-pink" data-clipboard-text="#eed4d9"> </td><td>Primrose pink </td></tr>
// <tr><td className="silver-pink" data-clipboard-text="#dcb1af"> </td><td>Silver pink </td></tr>
// <tr><td className="powder-pink" data-clipboard-text="#ecb2b3"> </td><td>Powder pink </td></tr>
// <tr><td className="mauveglow" data-clipboard-text="#d18489"> </td><td>Mauveglow </td></tr>
// <tr><td className="brandied-apricot" data-clipboard-text="#ca848a"> </td><td>Brandied apricot </td></tr>
// <tr><td className="dusty-rose" data-clipboard-text="#ba797d"> </td><td>Dusty rose </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="mauve-morn" data-clipboard-text="#ecd6d6"> </td><td>Mauve morn </td></tr>
// <tr><td className="mauve-chalk" data-clipboard-text="#e5d0cf"> </td><td>Mauve chalk </td></tr>
// <tr><td className="pearl" data-clipboard-text="#f9dbd8"> </td><td>Pearl </td></tr>
// <tr><td className="bridal-rose" data-clipboard-text="#d69fa2"> </td><td>Bridal rose </td></tr>
// <tr><td className="blush" data-clipboard-text="#d1969a"> </td><td>Blush </td></tr>
// <tr><td className="baroque-rose" data-clipboard-text="#b35a66"> </td><td>Baroque rose </td></tr>
// <tr><td className="slate-rose" data-clipboard-text="#b45865"> </td><td>Slate rose </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="mineral-red" data-clipboard-text="#b35457"> </td><td>Mineral red </td></tr>
// <tr><td className="garnet-rose" data-clipboard-text="#ac4b55"> </td><td>Garnet rose </td></tr>
// <tr><td className="holly-berry" data-clipboard-text="#b44e5d"> </td><td>Holly berry </td></tr>
// <tr><td className="american-beauty" data-clipboard-text="#a73340"> </td><td>American beauty </td></tr>
// <tr><td className="jester-red" data-clipboard-text="#9e1030"> </td><td>Jester red </td></tr>
// <tr><td className="rio-red" data-clipboard-text="#8a2232"> </td><td>Rio red </td></tr>
// <tr><td className="rumba-red" data-clipboard-text="#7c2439"> </td><td>Rumba red </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="earth-red" data-clipboard-text="#95424e"> </td><td>Earth red </td></tr>
// <tr><td className="deep-claret" data-clipboard-text="#973443"> </td><td>Deep claret </td></tr>
// <tr><td className="garnet" data-clipboard-text="#953640"> </td><td>Garnet </td></tr>
// <tr><td className="brick-red" data-clipboard-text="#8c373e"> </td><td>Brick red </td></tr>
// <tr><td className="rosewood" data-clipboard-text="#813639"> </td><td>Rosewood </td></tr>
// <tr><td className="tibetan-red" data-clipboard-text="#782a39"> </td><td>Tibetan red </td></tr>
// <tr><td className="biking-red" data-clipboard-text="#77212e"> </td><td>Biking red </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="apple-butter" data-clipboard-text="#844b4d"> </td><td>Apple butter </td></tr>
// <tr><td className="oxblood-red" data-clipboard-text="#70393f"> </td><td>Oxblood red </td></tr>
// <tr><td className="cowhide" data-clipboard-text="#884344"> </td><td>Cowhide </td></tr>
// <tr><td className="burnt-russet" data-clipboard-text="#7e3940"> </td><td>Burnt russet </td></tr>
// <tr><td className="ruby-wine" data-clipboard-text="#77333b"> </td><td>Ruby wine </td></tr>
// <tr><td className="cordovan" data-clipboard-text="#702f3b"> </td><td>Cordovan </td></tr>
// <tr><td className="tawny-port" data-clipboard-text="#5c2c35"> </td><td>Tawny port </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="creole-pink" data-clipboard-text="#f7d5cc"> </td><td>Creole pink </td></tr>
// <tr><td className="peach-blush" data-clipboard-text="#e4ccc6"> </td><td>Peach blush </td></tr>
// <tr><td className="cloud-pink" data-clipboard-text="#f5d1c8"> </td><td>Cloud pink </td></tr>
// <tr><td className="veiled-rose" data-clipboard-text="#f8cdc9"> </td><td>Veiled rose </td></tr>
// <tr><td className="pearl-blush" data-clipboard-text="#f4cec5"> </td><td>Pearl blush </td></tr>
// <tr><td className="english-rose" data-clipboard-text="#f4c6c3"> </td><td>English rose </td></tr>
// <tr><td className="lotus" data-clipboard-text="#e2c1c0"> </td><td>Lotus </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="rosewater" data-clipboard-text="#f6dbd8"> </td><td>Rosewater </td></tr>
// <tr><td className="peach-whip" data-clipboard-text="#dbbeb7"> </td><td>Peach whip </td></tr>
// <tr><td className="rose-smoke" data-clipboard-text="#d3b4ad"> </td><td>Rose smoke </td></tr>
// <tr><td className="coral-cloud" data-clipboard-text="#e2a9a1"> </td><td>Coral cloud </td></tr>
// <tr><td className="misty-rose" data-clipboard-text="#caa39a"> </td><td>Misty rose </td></tr>
// <tr><td className="peach-beige" data-clipboard-text="#d3a297"> </td><td>Peach beige </td></tr>
// <tr><td className="cameo-brown" data-clipboard-text="#c08a80"> </td><td>Cameo brown </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="seashell-pink" data-clipboard-text="#f7c8c2"> </td><td>Seashell pink </td></tr>
// <tr><td className="chintz-rose" data-clipboard-text="#eec4be"> </td><td>Chintz rose </td></tr>
// <tr><td className="impatiens-pink" data-clipboard-text="#ffc4bc"> </td><td>Impatiens pink </td></tr>
// <tr><td className="peachskin" data-clipboard-text="#dfb8b6"> </td><td>Peachskin </td></tr>
// <tr><td className="mellow-rose" data-clipboard-text="#d9a6a1"> </td><td>Mellow rose </td></tr>
// <tr><td className="rose-tan" data-clipboard-text="#d19c97"> </td><td>Rose tan </td></tr>
// <tr><td className="rosette" data-clipboard-text="#ce8e8b"> </td><td>Rosette </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="mauvewood" data-clipboard-text="#a75d67"> </td><td>Mauvewood </td></tr>
// <tr><td className="rose-wine" data-clipboard-text="#a4596d"> </td><td>Rose wine </td></tr>
// <tr><td className="malaga" data-clipboard-text="#9f5069"> </td><td>Malaga </td></tr>
// <tr><td className="dry-rose" data-clipboard-text="#8c4759"> </td><td>Dry rose </td></tr>
// <tr><td className="hawthorn-rose" data-clipboard-text="#884c5e"> </td><td>Hawthorn rose </td></tr>
// <tr><td className="maroon" data-clipboard-text="#834655"> </td><td>Maroon </td></tr>
// <tr><td className="wild-ginger" data-clipboard-text="#7c4c53"> </td><td>Wild ginger </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="sangria" data-clipboard-text="#982551"> </td><td>Sangria </td></tr>
// <tr><td className="red-bud" data-clipboard-text="#962d49"> </td><td>Red bud </td></tr>
// <tr><td className="beaujolais" data-clipboard-text="#80304c"> </td><td>Beaujolais </td></tr>
// <tr><td className="anemone" data-clipboard-text="#842c48"> </td><td>Anemone </td></tr>
// <tr><td className="beet-red" data-clipboard-text="#7a1f3d"> </td><td>Beet red </td></tr>
// <tr><td className="red-plum" data-clipboard-text="#7c2946"> </td><td>Red plum </td></tr>
// <tr><td className="rhododendron" data-clipboard-text="#722b3f"> </td><td>Rhododendron </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="barely-pink" data-clipboard-text="#f8d7dd"> </td><td>Barely pink </td></tr>
// <tr><td className="blushing-bride" data-clipboard-text="#fbd3d9"> </td><td>Blushing bride </td></tr>
// <tr><td className="cradle-pink" data-clipboard-text="#edd0dd"> </td><td>Cradle pink </td></tr>
// <tr><td className="pale-lilac" data-clipboard-text="#e1c6cc"> </td><td>Pale lilac </td></tr>
// <tr><td className="chalk-pink" data-clipboard-text="#e6c5ca"> </td><td>Chalk pink </td></tr>
// <tr><td className="light-lilac" data-clipboard-text="#dec6d3"> </td><td>Light lilac </td></tr>
// <tr><td className="pink-nectar" data-clipboard-text="#d8aab7"> </td><td>Pink nectar </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="heavenly-pink" data-clipboard-text="#f4dede"> </td><td>Heavenly pink </td></tr>
// <tr><td className="potpourri" data-clipboard-text="#e7c9ca"> </td><td>Potpourri </td></tr>
// <tr><td className="crystal-pink" data-clipboard-text="#edd0ce"> </td><td>Crystal pink </td></tr>
// <tr><td className="pink-dogwood" data-clipboard-text="#f7d1d1"> </td><td>Pink dogwood </td></tr>
// <tr><td className="crystal-rose" data-clipboard-text="#fdc3c6"> </td><td>Crystal rose </td></tr>
// <tr><td className="strawberry-cream" data-clipboard-text="#f4c3c4"> </td><td>Strawberry cream </td></tr>
// <tr><td className="gossamer-pink" data-clipboard-text="#fac8c3"> </td><td>Gossamer pink </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="rose-shadow" data-clipboard-text="#f9c2cd"> </td><td>Rose shadow </td></tr>
// <tr><td className="orchid-pink" data-clipboard-text="#f3bbca"> </td><td>Orchid pink </td></tr>
// <tr><td className="almond-blossom" data-clipboard-text="#f5bec7"> </td><td>Almond blossom </td></tr>
// <tr><td className="coral-blush" data-clipboard-text="#e6b2b8"> </td><td>Coral blush </td></tr>
// <tr><td className="candy-pink" data-clipboard-text="#f5b0bd"> </td><td>Candy pink </td></tr>
// <tr><td className="peony" data-clipboard-text="#ed9ca8"> </td><td>Peony </td></tr>
// <tr><td className="sea-pink" data-clipboard-text="#de98ab"> </td><td>Sea pink </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="cashmere-rose" data-clipboard-text="#ce879f"> </td><td>Cashmere rose </td></tr>
// <tr><td className="wild-rose" data-clipboard-text="#ce8498"> </td><td>Wild rose </td></tr>
// <tr><td className="orchid-smoke" data-clipboard-text="#d294aa"> </td><td>Orchid smoke </td></tr>
// <tr><td className="polignac" data-clipboard-text="#c28799"> </td><td>Polignac </td></tr>
// <tr><td className="lilas" data-clipboard-text="#b88995"> </td><td>Lilas </td></tr>
// <tr><td className="mauve-orchid" data-clipboard-text="#b58299"> </td><td>Mauve orchid </td></tr>
// <tr><td className="orchid-haze" data-clipboard-text="#b0879b"> </td><td>Orchid haze </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="parfait-pink" data-clipboard-text="#e9c3cf"> </td><td>Parfait pink </td></tr>
// <tr><td className="pink-mist" data-clipboard-text="#e6bccd"> </td><td>Pink mist </td></tr>
// <tr><td className="cameo-pink" data-clipboard-text="#dba9b8"> </td><td>Cameo pink </td></tr>
// <tr><td className="sweet-lilac" data-clipboard-text="#e8b5ce"> </td><td>Sweet lilac </td></tr>
// <tr><td className="pink-lavender" data-clipboard-text="#d9afca"> </td><td>Pink lavender </td></tr>
// <tr><td className="pastel-lavender" data-clipboard-text="#d8a1c4"> </td><td>Pastel lavender </td></tr>
// <tr><td className="orchid" data-clipboard-text="#d198c5"> </td><td>Orchid </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="lilac-chiffon" data-clipboard-text="#de9bc4"> </td><td>Lilac chiffon </td></tr>
// <tr><td className="moonlite-mauve" data-clipboard-text="#d28fb0"> </td><td>Moonlite mauve </td></tr>
// <tr><td className="cyclamen" data-clipboard-text="#d687ba"> </td><td>Cyclamen </td></tr>
// <tr><td className="opera-mauve" data-clipboard-text="#ca80b1"> </td><td>Opera mauve </td></tr>
// <tr><td className="crocus" data-clipboard-text="#c67fae"> </td><td>Crocus </td></tr>
// <tr><td className="mulberry" data-clipboard-text="#a76c97"> </td><td>Mulberry </td></tr>
// <tr><td className="striking-purple" data-clipboard-text="#944e87"> </td><td>Striking purple </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="violet" data-clipboard-text="#c17fb5"> </td><td>Violet </td></tr>
// <tr><td className="iris-orchid" data-clipboard-text="#a767a2"> </td><td>Iris orchid </td></tr>
// <tr><td className="radiant-orchid" data-clipboard-text="#ad5e99"> </td><td>Radiant orchid </td></tr>
// <tr><td className="spring-crocus" data-clipboard-text="#ba69a1"> </td><td>Spring crocus </td></tr>
// <tr><td className="meadow-mauve" data-clipboard-text="#a9568c"> </td><td>Meadow mauve </td></tr>
// <tr><td className="amethyst" data-clipboard-text="#864d75"> </td><td>Amethyst </td></tr>
// <tr><td className="magenta-purple" data-clipboard-text="#6b264b"> </td><td>Magenta purple </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="rosebud" data-clipboard-text="#b65f9a"> </td><td>Rosebud </td></tr>
// <tr><td className="purple-orchid" data-clipboard-text="#ad4d8c"> </td><td>Purple orchid </td></tr>
// <tr><td className="festival-fuchsia" data-clipboard-text="#9e2c6a"> </td><td>Festival fuchsia </td></tr>
// <tr><td className="baton-rouge" data-clipboard-text="#973c6c"> </td><td>Baton rouge </td></tr>
// <tr><td className="boysenberry" data-clipboard-text="#85325c"> </td><td>Boysenberry </td></tr>
// <tr><td className="raspberry-radiance" data-clipboard-text="#802a50"> </td><td>Raspberry radiance </td></tr>
// <tr><td className="purple-potion" data-clipboard-text="#692746"> </td><td>Purple potion </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="dahlia-mauve" data-clipboard-text="#a64f82"> </td><td>Dahlia mauve </td></tr>
// <tr><td className="vivid-viola" data-clipboard-text="#993c7c"> </td><td>Vivid viola </td></tr>
// <tr><td className="wild-aster" data-clipboard-text="#92316f"> </td><td>Wild aster </td></tr>
// <tr><td className="deep-orchid" data-clipboard-text="#903f75"> </td><td>Deep orchid </td></tr>
// <tr><td className="clover" data-clipboard-text="#8a3371"> </td><td>Clover </td></tr>
// <tr><td className="purple-wine" data-clipboard-text="#8c3573"> </td><td>Purple wine </td></tr>
// <tr><td className="hollyhock" data-clipboard-text="#823270"> </td><td>Hollyhock </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="hyacinth-violet" data-clipboard-text="#8d4687"> </td><td>Hyacinth violet </td></tr>
// <tr><td className="dahlia" data-clipboard-text="#843e83"> </td><td>Dahlia </td></tr>
// <tr><td className="sparkling-grape" data-clipboard-text="#773376"> </td><td>Sparkling grape </td></tr>
// <tr><td className="byzantium" data-clipboard-text="#853b7b"> </td><td>Byzantium </td></tr>
// <tr><td className="phlox" data-clipboard-text="#692d5d"> </td><td>Phlox </td></tr>
// <tr><td className="grape-juice" data-clipboard-text="#682961"> </td><td>Grape juice </td></tr>
// <tr><td className="gloxinia" data-clipboard-text="#622e5a"> </td><td>Gloxinia </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="crystal-gray" data-clipboard-text="#d7cbc4"> </td><td>Crystal gray </td></tr>
// <tr><td className="mushroom" data-clipboard-text="#bdaca3"> </td><td>Mushroom </td></tr>
// <tr><td className="shadow-gray" data-clipboard-text="#bba5a0"> </td><td>Shadow gray </td></tr>
// <tr><td className="sphinx" data-clipboard-text="#ab9895"> </td><td>Sphinx </td></tr>
// <tr><td className="bark" data-clipboard-text="#a99592"> </td><td>Bark </td></tr>
// <tr><td className="fawn" data-clipboard-text="#ae9490"> </td><td>Fawn </td></tr>
// <tr><td className="adobe-rose" data-clipboard-text="#ba9f99"> </td><td>Adobe rose </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="pale-mauve" data-clipboard-text="#c6a4a4"> </td><td>Pale mauve </td></tr>
// <tr><td className="woodrose" data-clipboard-text="#ae8c8e"> </td><td>Woodrose </td></tr>
// <tr><td className="deauville-mauve" data-clipboard-text="#af9294"> </td><td>Deauville mauve </td></tr>
// <tr><td className="twilight-mauve" data-clipboard-text="#8b6f70"> </td><td>Twilight mauve </td></tr>
// <tr><td className="rose-taupe" data-clipboard-text="#806062"> </td><td>Rose taupe </td></tr>
// <tr><td className="rose-brown" data-clipboard-text="#80565b"> </td><td>Rose brown </td></tr>
// <tr><td className="roan-rouge" data-clipboard-text="#885157"> </td><td>Roan rouge </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="antler" data-clipboard-text="#957a76"> </td><td>Antler </td></tr>
// <tr><td className="peppercorn" data-clipboard-text="#6c5656"> </td><td>Peppercorn </td></tr>
// <tr><td className="raisin" data-clipboard-text="#524144"> </td><td>Raisin </td></tr>
// <tr><td className="huckleberry" data-clipboard-text="#5b4349"> </td><td>Huckleberry </td></tr>
// <tr><td className="catawba-grape" data-clipboard-text="#5d3c43"> </td><td>Catawba grape </td></tr>
// <tr><td className="puce" data-clipboard-text="#503938"> </td><td>Puce </td></tr>
// <tr><td className="fudge" data-clipboard-text="#493338"> </td><td>Fudge </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="mahogany-rose" data-clipboard-text="#c5a193"> </td><td>Mahogany rose </td></tr>
// <tr><td className="burlwood" data-clipboard-text="#9b716b"> </td><td>Burlwood </td></tr>
// <tr><td className="marron" data-clipboard-text="#6e4c4b"> </td><td>Marron </td></tr>
// <tr><td className="decadent-chocolate" data-clipboard-text="#513235"> </td><td>Decadent chocolate </td></tr>
// <tr><td className="red-mahogany" data-clipboard-text="#60373d"> </td><td>Red mahogany </td></tr>
// <tr><td className="vineyard-wine" data-clipboard-text="#58363d"> </td><td>Vineyard wine </td></tr>
// <tr><td className="winetasting" data-clipboard-text="#492a34"> </td><td>Winetasting </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="port" data-clipboard-text="#663336"> </td><td>Port </td></tr>
// <tr><td className="chocolate-truffle" data-clipboard-text="#612e35"> </td><td>Chocolate truffle </td></tr>
// <tr><td className="burgundy" data-clipboard-text="#64313e"> </td><td>Burgundy </td></tr>
// <tr><td className="zinfandel" data-clipboard-text="#5c2935"> </td><td>Zinfandel </td></tr>
// <tr><td className="windsor-wine" data-clipboard-text="#582b36"> </td><td>Windsor wine </td></tr>
// <tr><td className="port-royale" data-clipboard-text="#502b33"> </td><td>Port royale </td></tr>
// <tr><td className="fig" data-clipboard-text="#532d3b"> </td><td>Fig </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="violet-ice" data-clipboard-text="#c2acb1"> </td><td>Violet ice </td></tr>
// <tr><td className="burnished-lilac" data-clipboard-text="#c5aeb1"> </td><td>Burnished lilac </td></tr>
// <tr><td className="keepsake-lilac" data-clipboard-text="#c0a5ae"> </td><td>Keepsake lilac </td></tr>
// <tr><td className="mauve-shadows" data-clipboard-text="#b598a3"> </td><td>Mauve shadows </td></tr>
// <tr><td className="dawn-pink" data-clipboard-text="#bfa3af"> </td><td>Dawn pink </td></tr>
// <tr><td className="fragrant-lilac" data-clipboard-text="#ceadbe"> </td><td>Fragrant lilac </td></tr>
// <tr><td className="mauve-mist" data-clipboard-text="#c49bd4"> </td><td>Mauve mist </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="heather-rose" data-clipboard-text="#ad6d7f"> </td><td>Heather rose </td></tr>
// <tr><td className="red-violet" data-clipboard-text="#a35776"> </td><td>Red violet </td></tr>
// <tr><td className="mellow-mauve" data-clipboard-text="#996378"> </td><td>Mellow mauve </td></tr>
// <tr><td className="bordeaux" data-clipboard-text="#96637b"> </td><td>Bordeaux </td></tr>
// <tr><td className="violet-quartz" data-clipboard-text="#8b4963"> </td><td>Violet quartz </td></tr>
// <tr><td className="damson" data-clipboard-text="#854c65"> </td><td>Damson </td></tr>
// <tr><td className="amaranth" data-clipboard-text="#6f3c56"> </td><td>Amaranth </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="zephyr" data-clipboard-text="#c89fa5"> </td><td>Zephyr </td></tr>
// <tr><td className="dusky-orchid" data-clipboard-text="#9a7182"> </td><td>Dusky orchid </td></tr>
// <tr><td className="grape-shake" data-clipboard-text="#886971"> </td><td>Grape shake </td></tr>
// <tr><td className="wistful-mauve" data-clipboard-text="#946c74"> </td><td>Wistful mauve </td></tr>
// <tr><td className="tulipwood" data-clipboard-text="#805466"> </td><td>Tulipwood </td></tr>
// <tr><td className="grape-nectar" data-clipboard-text="#8d5c74"> </td><td>Grape nectar </td></tr>
// <tr><td className="argyle-purple" data-clipboard-text="#895c79"> </td><td>Argyle purple </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="nostalgia-rose" data-clipboard-text="#a4777e"> </td><td>Nostalgia rose </td></tr>
// <tr><td className="deco-rose" data-clipboard-text="#985f68"> </td><td>Deco rose </td></tr>
// <tr><td className="renaissance-rose" data-clipboard-text="#865560"> </td><td>Renaissance rose </td></tr>
// <tr><td className="nocturne" data-clipboard-text="#7a4b56"> </td><td>Nocturne </td></tr>
// <tr><td className="crushed-berry" data-clipboard-text="#804f5a"> </td><td>Crushed berry </td></tr>
// <tr><td className="crushed-violets" data-clipboard-text="#643a4c"> </td><td>Crushed violets </td></tr>
// <tr><td className="mauve-wine" data-clipboard-text="#5b3644"> </td><td>Mauve wine </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="plum-wine" data-clipboard-text="#674550"> </td><td>Plum wine </td></tr>
// <tr><td className="eggplant" data-clipboard-text="#613f4c"> </td><td>Eggplant </td></tr>
// <tr><td className="prune" data-clipboard-text="#603749"> </td><td>Prune </td></tr>
// <tr><td className="prune-purple" data-clipboard-text="#5c3a4d"> </td><td>Prune purple </td></tr>
// <tr><td className="grape-wine" data-clipboard-text="#5a2f43"> </td><td>Grape wine </td></tr>
// <tr><td className="italian-plum" data-clipboard-text="#533146"> </td><td>Italian plum </td></tr>
// <tr><td className="potent-purple" data-clipboard-text="#462639"> </td><td>Potent purple </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="lavender-herb" data-clipboard-text="#b18eaa"> </td><td>Lavender herb </td></tr>
// <tr><td className="lavender-mist" data-clipboard-text="#ae90a7"> </td><td>Lavender mist </td></tr>
// <tr><td className="valerian" data-clipboard-text="#9f7a93"> </td><td>Valerian </td></tr>
// <tr><td className="very-grape" data-clipboard-text="#927288"> </td><td>Very grape </td></tr>
// <tr><td className="grapeade" data-clipboard-text="#85677b"> </td><td>Grapeade </td></tr>
// <tr><td className="purple-gumdrop" data-clipboard-text="#7a596f"> </td><td>Purple gumdrop </td></tr>
// <tr><td className="berry-conserve" data-clipboard-text="#765269"> </td><td>Berry conserve </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="chinese-violet" data-clipboard-text="#835e81"> </td><td>Chinese violet </td></tr>
// <tr><td className="crushed-grape" data-clipboard-text="#7a547f"> </td><td>Crushed grape </td></tr>
// <tr><td className="concord-grape" data-clipboard-text="#7c5379"> </td><td>Concord grape </td></tr>
// <tr><td className="sunset-purple" data-clipboard-text="#6f456e"> </td><td>Sunset purple </td></tr>
// <tr><td className="wood-violet" data-clipboard-text="#75406a"> </td><td>Wood violet </td></tr>
// <tr><td className="purple-passion" data-clipboard-text="#683d62"> </td><td>Purple passion </td></tr>
// <tr><td className="dark-purple" data-clipboard-text="#582147"> </td><td>Dark purple </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="grape-jam" data-clipboard-text="#725671"> </td><td>Grape jam </td></tr>
// <tr><td className="deep-purple" data-clipboard-text="#50314c"> </td><td>Deep purple </td></tr>
// <tr><td className="wineberry" data-clipboard-text="#5a395b"> </td><td>Wineberry </td></tr>
// <tr><td className="grape-royale" data-clipboard-text="#4f2d54"> </td><td>Grape royale </td></tr>
// <tr><td className="plum-purple" data-clipboard-text="#51304e"> </td><td>Plum purple </td></tr>
// <tr><td className="hortensia" data-clipboard-text="#553b50"> </td><td>Hortensia </td></tr>
// <tr><td className="blackberry-wine" data-clipboard-text="#4d3246"> </td><td>Blackberry wine </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="navy-cosmos" data-clipboard-text="#503b53"> </td><td>Navy cosmos </td></tr>
// <tr><td className="indigo" data-clipboard-text="#4c3957"> </td><td>Indigo </td></tr>
// <tr><td className="purple-pennant" data-clipboard-text="#432c47"> </td><td>Purple pennant </td></tr>
// <tr><td className="plum-perfect" data-clipboard-text="#473442"> </td><td>Plum perfect </td></tr>
// <tr><td className="sweet-grape" data-clipboard-text="#4b3b4f"> </td><td>Sweet grape </td></tr>
// <tr><td className="shadow-purple" data-clipboard-text="#4e334e"> </td><td>Shadow purple </td></tr>
// <tr><td className="blackberry-cordial" data-clipboard-text="#3f2a47"> </td><td>Blackberry cordial </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="purple-reign" data-clipboard-text="#56456b"> </td><td>Purple reign </td></tr>
// <tr><td className="mulberry-purple" data-clipboard-text="#493c62"> </td><td>Mulberry purple </td></tr>
// <tr><td className="gothic-grape" data-clipboard-text="#473951"> </td><td>Gothic grape </td></tr>
// <tr><td className="grape" data-clipboard-text="#433455"> </td><td>Grape </td></tr>
// <tr><td className="mysterioso" data-clipboard-text="#46394b"> </td><td>Mysterioso </td></tr>
// <tr><td className="purple-velvet" data-clipboard-text="#41354d"> </td><td>Purple velvet </td></tr>
// <tr><td className="nightshade" data-clipboard-text="#433748"> </td><td>Nightshade </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="orchid-tint" data-clipboard-text="#dbd2db"> </td><td>Orchid tint </td></tr>
// <tr><td className="lilac-ash" data-clipboard-text="#d7cdcd"> </td><td>Lilac ash </td></tr>
// <tr><td className="gray-lilac" data-clipboard-text="#d4cacd"> </td><td>Gray lilac </td></tr>
// <tr><td className="hushed-violet" data-clipboard-text="#d1c0bf"> </td><td>Hushed violet </td></tr>
// <tr><td className="cloud-gray" data-clipboard-text="#b7a9ac"> </td><td>Cloud gray </td></tr>
// <tr><td className="quail" data-clipboard-text="#98868c"> </td><td>Quail </td></tr>
// <tr><td className="nirvana" data-clipboard-text="#a2919b"> </td><td>Nirvana </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="orchid-hush" data-clipboard-text="#cec3d2"> </td><td>Orchid hush </td></tr>
// <tr><td className="iris" data-clipboard-text="#baafbc"> </td><td>Iris </td></tr>
// <tr><td className="sea-fog" data-clipboard-text="#a5929d"> </td><td>Sea fog </td></tr>
// <tr><td className="elderberry" data-clipboard-text="#9d848e"> </td><td>Elderberry </td></tr>
// <tr><td className="black-plum" data-clipboard-text="#6c5765"> </td><td>Black plum </td></tr>
// <tr><td className="flint" data-clipboard-text="#705861"> </td><td>Flint </td></tr>
// <tr><td className="sassafras" data-clipboard-text="#54353b"> </td><td>Sassafras </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="evening-haze" data-clipboard-text="#bdb8c7"> </td><td>Evening haze </td></tr>
// <tr><td className="thistle" data-clipboard-text="#b9b3c5"> </td><td>Thistle </td></tr>
// <tr><td className="lavender-gray" data-clipboard-text="#9890a2"> </td><td>Lavender gray </td></tr>
// <tr><td className="minimal-gray" data-clipboard-text="#948d99"> </td><td>Minimal gray </td></tr>
// <tr><td className="purple-ash" data-clipboard-text="#8f8395"> </td><td>Purple ash </td></tr>
// <tr><td className="gray-ridge" data-clipboard-text="#847986"> </td><td>Gray ridge </td></tr>
// <tr><td className="purple-sage" data-clipboard-text="#75697e"> </td><td>Purple sage </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="heirloom-lilac" data-clipboard-text="#9d96b2"> </td><td>Heirloom lilac </td></tr>
// <tr><td className="wisteria" data-clipboard-text="#a198af"> </td><td>Wisteria </td></tr>
// <tr><td className="dusk" data-clipboard-text="#897f98"> </td><td>Dusk </td></tr>
// <tr><td className="daybreak" data-clipboard-text="#8981a0"> </td><td>Daybreak </td></tr>
// <tr><td className="cadet" data-clipboard-text="#6a6378"> </td><td>Cadet </td></tr>
// <tr><td className="mulled-grape" data-clipboard-text="#675a74"> </td><td>Mulled grape </td></tr>
// <tr><td className="purple-plumeria" data-clipboard-text="#473854"> </td><td>Purple plumeria </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="lilac-marble" data-clipboard-text="#c3babf"> </td><td>Lilac marble </td></tr>
// <tr><td className="ashes-of-roses" data-clipboard-text="#b5acab"> </td><td>Ashes of roses </td></tr>
// <tr><td className="gull-gray" data-clipboard-text="#a49ca0"> </td><td>Gull gray </td></tr>
// <tr><td className="zinc" data-clipboard-text="#92898a"> </td><td>Zinc </td></tr>
// <tr><td className="gull" data-clipboard-text="#918c8f"> </td><td>Gull </td></tr>
// <tr><td className="shark" data-clipboard-text="#6d636b"> </td><td>Shark </td></tr>
// <tr><td className="sparrow" data-clipboard-text="#69595c"> </td><td>Sparrow </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="orchid-ice" data-clipboard-text="#e0d0db"> </td><td>Orchid ice </td></tr>
// <tr><td className="lilac-snow" data-clipboard-text="#e0c7d7"> </td><td>Lilac snow </td></tr>
// <tr><td className="winsome-orchid" data-clipboard-text="#d4b9cb"> </td><td>Winsome orchid </td></tr>
// <tr><td className="fair-orchid" data-clipboard-text="#c0aac0"> </td><td>Fair orchid </td></tr>
// <tr><td className="lavender-frost" data-clipboard-text="#bdabbe"> </td><td>Lavender frost </td></tr>
// <tr><td className="orchid-petal" data-clipboard-text="#bfb4cb"> </td><td>Orchid petal </td></tr>
// <tr><td className="pastel-lilac" data-clipboard-text="#bdb0d0"> </td><td>Pastel lilac </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="orchid-bloom" data-clipboard-text="#c5aecf"> </td><td>Orchid bloom </td></tr>
// <tr><td className="orchid-bouquet" data-clipboard-text="#d1acce"> </td><td>Orchid bouquet </td></tr>
// <tr><td className="lupine" data-clipboard-text="#be9cc1"> </td><td>Lupine </td></tr>
// <tr><td className="violet-tulle" data-clipboard-text="#c193c0"> </td><td>Violet tulle </td></tr>
// <tr><td className="sheer-lilac" data-clipboard-text="#b793c0"> </td><td>Sheer lilac </td></tr>
// <tr><td className="african-violet" data-clipboard-text="#b085b7"> </td><td>African violet </td></tr>
// <tr><td className="dusty-lavender" data-clipboard-text="#a1759c"> </td><td>Dusty lavender </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="paisley-purple" data-clipboard-text="#8b79b1"> </td><td>Paisley purple </td></tr>
// <tr><td className="hyacinth" data-clipboard-text="#936ca7"> </td><td>Hyacinth </td></tr>
// <tr><td className="amethyst-orchid" data-clipboard-text="#926aa6"> </td><td>Amethyst orchid </td></tr>
// <tr><td className="dewberry" data-clipboard-text="#8b5987"> </td><td>Dewberry </td></tr>
// <tr><td className="purple-heart" data-clipboard-text="#745587"> </td><td>Purple heart </td></tr>
// <tr><td className="meadow-violet" data-clipboard-text="#764f82"> </td><td>Meadow violet </td></tr>
// <tr><td className="royal-purple" data-clipboard-text="#603f83"> </td><td>Royal purple </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="deep-lavender" data-clipboard-text="#775496"> </td><td>Deep lavender </td></tr>
// <tr><td className="royal-lilac" data-clipboard-text="#774d8e"> </td><td>Royal lilac </td></tr>
// <tr><td className="pansy" data-clipboard-text="#653d7c"> </td><td>Pansy </td></tr>
// <tr><td className="bright-violet" data-clipboard-text="#784384"> </td><td>Bright violet </td></tr>
// <tr><td className="amaranth-purple" data-clipboard-text="#6a397b"> </td><td>Amaranth purple </td></tr>
// <tr><td className="purple-magic" data-clipboard-text="#663271"> </td><td>Purple magic </td></tr>
// <tr><td className="plum" data-clipboard-text="#5a315d"> </td><td>Plum </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="imperial-palace" data-clipboard-text="#604e7a"> </td><td>Imperial palace </td></tr>
// <tr><td className="patrician-purple" data-clipboard-text="#6c4e79"> </td><td>Patrician purple </td></tr>
// <tr><td className="loganberry" data-clipboard-text="#5a4769"> </td><td>Loganberry </td></tr>
// <tr><td className="majesty" data-clipboard-text="#593761"> </td><td>Majesty </td></tr>
// <tr><td className="imperial-purple" data-clipboard-text="#542c5d"> </td><td>Imperial purple </td></tr>
// <tr><td className="crown-jewel" data-clipboard-text="#482d54"> </td><td>Crown jewel </td></tr>
// <tr><td className="parachute-purple" data-clipboard-text="#392852"> </td><td>Parachute purple </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="lavender-fog" data-clipboard-text="#d2c4d6"> </td><td>Lavender fog </td></tr>
// <tr><td className="lavendula" data-clipboard-text="#bca4cb"> </td><td>Lavendula </td></tr>
// <tr><td className="lavender" data-clipboard-text="#afa4ce"> </td><td>Lavender </td></tr>
// <tr><td className="bougainvillea" data-clipboard-text="#9884b9"> </td><td>Bougainvillea </td></tr>
// <tr><td className="violet-tulip" data-clipboard-text="#9e91c3"> </td><td>Violet tulip </td></tr>
// <tr><td className="chalk-violet" data-clipboard-text="#8f7da5"> </td><td>Chalk violet </td></tr>
// <tr><td className="purple-haze" data-clipboard-text="#807396"> </td><td>Purple haze </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="smoky-grape" data-clipboard-text="#b88aac"> </td><td>Smoky grape </td></tr>
// <tr><td className="regal-orchid" data-clipboard-text="#a98baf"> </td><td>Regal orchid </td></tr>
// <tr><td className="viola" data-clipboard-text="#a692ba"> </td><td>Viola </td></tr>
// <tr><td className="orchid-mist" data-clipboard-text="#917798"> </td><td>Orchid mist </td></tr>
// <tr><td className="grape-compote" data-clipboard-text="#6b5876"> </td><td>Grape compote </td></tr>
// <tr><td className="montana-grape" data-clipboard-text="#6c5971"> </td><td>Montana grape </td></tr>
// <tr><td className="vintage-violet" data-clipboard-text="#634f62"> </td><td>Vintage violet </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="aster-purple" data-clipboard-text="#7d74a8"> </td><td>Aster purple </td></tr>
// <tr><td className="dahlia-purple" data-clipboard-text="#7e6eac"> </td><td>Dahlia purple </td></tr>
// <tr><td className="passion-flower" data-clipboard-text="#6d5698"> </td><td>Passion flower </td></tr>
// <tr><td className="ultra-violet" data-clipboard-text="#5f4b8b"> </td><td>Ultra violet </td></tr>
// <tr><td className="prism-violet" data-clipboard-text="#53357d"> </td><td>Prism violet </td></tr>
// <tr><td className="heliotrope" data-clipboard-text="#4f3872"> </td><td>Heliotrope </td></tr>
// <tr><td className="petunia" data-clipboard-text="#4f3466"> </td><td>Petunia </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="corsican-blue" data-clipboard-text="#646093"> </td><td>Corsican blue </td></tr>
// <tr><td className="veronica" data-clipboard-text="#6d6695"> </td><td>Veronica </td></tr>
// <tr><td className="blue-iris" data-clipboard-text="#5a5b9f"> </td><td>Blue iris </td></tr>
// <tr><td className="purple-opulence" data-clipboard-text="#60569a"> </td><td>Purple opulence </td></tr>
// <tr><td className="gentian-violet" data-clipboard-text="#544275"> </td><td>Gentian violet </td></tr>
// <tr><td className="liberty" data-clipboard-text="#4d448a"> </td><td>Liberty </td></tr>
// <tr><td className="deep-blue" data-clipboard-text="#44377d"> </td><td>Deep blue </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="bleached-denim" data-clipboard-text="#646f9b"> </td><td>Bleached denim </td></tr>
// <tr><td className="heron" data-clipboard-text="#62617e"> </td><td>Heron </td></tr>
// <tr><td className="skipper-blue" data-clipboard-text="#484a72"> </td><td>Skipper blue </td></tr>
// <tr><td className="navy-blue" data-clipboard-text="#403f6f"> </td><td>Navy blue </td></tr>
// <tr><td className="deep-wisteria" data-clipboard-text="#443f6f"> </td><td>Deep wisteria </td></tr>
// <tr><td className="blue-ribbon" data-clipboard-text="#3a395f"> </td><td>Blue ribbon </td></tr>
// <tr><td className="astral-aura" data-clipboard-text="#363151"> </td><td>Astral aura </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="lilac-hint" data-clipboard-text="#d0d0da"> </td><td>Lilac hint </td></tr>
// <tr><td className="misty-lilac" data-clipboard-text="#bcb4c4"> </td><td>Misty lilac </td></tr>
// <tr><td className="lavender-blue" data-clipboard-text="#c5c0d0"> </td><td>Lavender blue </td></tr>
// <tr><td className="purple-heather" data-clipboard-text="#bab8d3"> </td><td>Purple heather </td></tr>
// <tr><td className="cosmic-sky" data-clipboard-text="#aaaac4"> </td><td>Cosmic sky </td></tr>
// <tr><td className="languid-lavender" data-clipboard-text="#a2a1ba"> </td><td>Languid lavender </td></tr>
// <tr><td className="dapple-gray" data-clipboard-text="#9c9ba7"> </td><td>Dapple gray </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="sweet-lavender" data-clipboard-text="#9a9bc1"> </td><td>Sweet lavender </td></tr>
// <tr><td className="easter-egg" data-clipboard-text="#919bc9"> </td><td>Easter egg </td></tr>
// <tr><td className="jacaranda" data-clipboard-text="#848dc5"> </td><td>Jacaranda </td></tr>
// <tr><td className="deep-periwinkle" data-clipboard-text="#7c83bc"> </td><td>Deep periwinkle </td></tr>
// <tr><td className="dusted-peri" data-clipboard-text="#696ba0"> </td><td>Dusted peri </td></tr>
// <tr><td className="violet-storm" data-clipboard-text="#5c619d"> </td><td>Violet storm </td></tr>
// <tr><td className="baja-blue" data-clipboard-text="#5f6db0"> </td><td>Baja blue </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="thistle-down" data-clipboard-text="#9499bb"> </td><td>Thistle down </td></tr>
// <tr><td className="persian-violet" data-clipboard-text="#8c8eb2"> </td><td>Persian violet </td></tr>
// <tr><td className="twilight-purple" data-clipboard-text="#66648b"> </td><td>Twilight purple </td></tr>
// <tr><td className="orient-blue" data-clipboard-text="#47457a"> </td><td>Orient blue </td></tr>
// <tr><td className="clematis-blue" data-clipboard-text="#363b7c"> </td><td>Clematis blue </td></tr>
// <tr><td className="royal-blue" data-clipboard-text="#3d428b"> </td><td>Royal blue </td></tr>
// <tr><td className="spectrum-blue" data-clipboard-text="#3d3c7c"> </td><td>Spectrum blue </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="lavender-violet" data-clipboard-text="#767ba5"> </td><td>Lavender violet </td></tr>
// <tr><td className="blue-ice" data-clipboard-text="#70789b"> </td><td>Blue ice </td></tr>
// <tr><td className="velvet-morning" data-clipboard-text="#60688d"> </td><td>Velvet morning </td></tr>
// <tr><td className="marlin" data-clipboard-text="#515b87"> </td><td>Marlin </td></tr>
// <tr><td className="blueprint" data-clipboard-text="#2d3359"> </td><td>Blueprint </td></tr>
// <tr><td className="blue-depths" data-clipboard-text="#263056"> </td><td>Blue depths </td></tr>
// <tr><td className="medieval-blue" data-clipboard-text="#29304e"> </td><td>Medieval blue </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="lavender-aura" data-clipboard-text="#9f99aa"> </td><td>Lavender aura </td></tr>
// <tr><td className="stonewash" data-clipboard-text="#74809a"> </td><td>Stonewash </td></tr>
// <tr><td className="nightshadow-blue" data-clipboard-text="#4e5368"> </td><td>Nightshadow blue </td></tr>
// <tr><td className="blue-indigo" data-clipboard-text="#49516d"> </td><td>Blue indigo </td></tr>
// <tr><td className="graystone" data-clipboard-text="#4d495b"> </td><td>Graystone </td></tr>
// <tr><td className="crown-blue" data-clipboard-text="#464b65"> </td><td>Crown blue </td></tr>
// <tr><td className="deep-cobalt" data-clipboard-text="#404466"> </td><td>Deep cobalt </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="arctic-ice" data-clipboard-text="#bfc7d6"> </td><td>Arctic ice </td></tr>
// <tr><td className="gray-dawn" data-clipboard-text="#bbc1cc"> </td><td>Gray dawn </td></tr>
// <tr><td className="heather" data-clipboard-text="#b7c0d6"> </td><td>Heather </td></tr>
// <tr><td className="eventide" data-clipboard-text="#959eb7"> </td><td>Eventide </td></tr>
// <tr><td className="silver-lake-blue" data-clipboard-text="#618bb9"> </td><td>Silver lake blue </td></tr>
// <tr><td className="blue-bonnet" data-clipboard-text="#6384b8"> </td><td>Blue bonnet </td></tr>
// <tr><td className="blue-yonder" data-clipboard-text="#5a77a8"> </td><td>Blue yonder </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="lavender-lustre" data-clipboard-text="#8c9cc1"> </td><td>Lavender lustre </td></tr>
// <tr><td className="purple-impression" data-clipboard-text="#858fb1"> </td><td>Purple impression </td></tr>
// <tr><td className="grapemist" data-clipboard-text="#8398ca"> </td><td>Grapemist </td></tr>
// <tr><td className="vista-blue" data-clipboard-text="#81a0d4"> </td><td>Vista blue </td></tr>
// <tr><td className="cornflower-blue" data-clipboard-text="#7391c8"> </td><td>Cornflower blue </td></tr>
// <tr><td className="persian-jewel" data-clipboard-text="#6e81be"> </td><td>Persian jewel </td></tr>
// <tr><td className="wedgewood" data-clipboard-text="#6479b3"> </td><td>Wedgewood </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="skyway" data-clipboard-text="#adbed3"> </td><td>Skyway </td></tr>
// <tr><td className="cashmere-blue" data-clipboard-text="#a5b8d0"> </td><td>Cashmere blue </td></tr>
// <tr><td className="blue-bell" data-clipboard-text="#93b4d7"> </td><td>Blue bell </td></tr>
// <tr><td className="placid-blue" data-clipboard-text="#8cadd3"> </td><td>Placid blue </td></tr>
// <tr><td className="della-robbia-blue" data-clipboard-text="#7a9dcb"> </td><td>Della Robbia blue </td></tr>
// <tr><td className="provence" data-clipboard-text="#658dc6"> </td><td>Provence </td></tr>
// <tr><td className="ultramarine" data-clipboard-text="#5b7ebd"> </td><td>Ultramarine </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="allure" data-clipboard-text="#7291b4"> </td><td>Allure </td></tr>
// <tr><td className="colony-blue" data-clipboard-text="#65769a"> </td><td>Colony blue </td></tr>
// <tr><td className="moonlight-blue" data-clipboard-text="#506886"> </td><td>Moonlight blue </td></tr>
// <tr><td className="dutch-blue" data-clipboard-text="#4a638d"> </td><td>Dutch blue </td></tr>
// <tr><td className="delft" data-clipboard-text="#3d5e8c"> </td><td>Delft </td></tr>
// <tr><td className="limoges" data-clipboard-text="#243f6c"> </td><td>Limoges </td></tr>
// <tr><td className="estate-blue" data-clipboard-text="#233658"> </td><td>Estate blue </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="infinity" data-clipboard-text="#6e7e99"> </td><td>Infinity </td></tr>
// <tr><td className="bijou-blue" data-clipboard-text="#4e5e7f"> </td><td>Bijou blue </td></tr>
// <tr><td className="coastal-fjord" data-clipboard-text="#505d7e"> </td><td>Coastal fjord </td></tr>
// <tr><td className="true-navy" data-clipboard-text="#3f5277"> </td><td>True navy </td></tr>
// <tr><td className="ensign-blue" data-clipboard-text="#384c67"> </td><td>Ensign blue </td></tr>
// <tr><td className="dark-denim" data-clipboard-text="#35465e"> </td><td>Dark denim </td></tr>
// <tr><td className="insignia-blue" data-clipboard-text="#2f3e55"> </td><td>Insignia blue </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="air-blue" data-clipboard-text="#77acc7"> </td><td>Air blue </td></tr>
// <tr><td className="heritage-blue" data-clipboard-text="#5d96bc"> </td><td>Heritage blue </td></tr>
// <tr><td className="ethereal-blue" data-clipboard-text="#5ca6ce"> </td><td>Ethereal blue </td></tr>
// <tr><td className="bonnie-blue" data-clipboard-text="#539ccc"> </td><td>Bonnie blue </td></tr>
// <tr><td className="cendre-blue" data-clipboard-text="#3e7fa5"> </td><td>Cendre blue </td></tr>
// <tr><td className="parisian-blue" data-clipboard-text="#4f7ca4"> </td><td>Parisian blue </td></tr>
// <tr><td className="faience" data-clipboard-text="#2a6a8b"> </td><td>Faience </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="alaskan-blue" data-clipboard-text="#6da9d2"> </td><td>Alaskan blue </td></tr>
// <tr><td className="little-boy-blue" data-clipboard-text="#6ea2d5"> </td><td>Little boy blue </td></tr>
// <tr><td className="azure-blue" data-clipboard-text="#4d91c6"> </td><td>Azure blue </td></tr>
// <tr><td className="riviera" data-clipboard-text="#5879a2"> </td><td>Riviera </td></tr>
// <tr><td className="federal-blue" data-clipboard-text="#43628b"> </td><td>Federal blue </td></tr>
// <tr><td className="star-sapphire" data-clipboard-text="#386192"> </td><td>Star sapphire </td></tr>
// <tr><td className="bright-cobalt" data-clipboard-text="#385d8d"> </td><td>Bright cobalt </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="dusk-blue" data-clipboard-text="#7ba0c0"> </td><td>Dusk blue </td></tr>
// <tr><td className="regatta" data-clipboard-text="#487ab7"> </td><td>Regatta </td></tr>
// <tr><td className="palace-blue" data-clipboard-text="#346cb0"> </td><td>Palace blue </td></tr>
// <tr><td className="strong-blue" data-clipboard-text="#1f5da0"> </td><td>Strong blue </td></tr>
// <tr><td className="turkish-sea" data-clipboard-text="#195190"> </td><td>Turkish sea </td></tr>
// <tr><td className="olympian-blue" data-clipboard-text="#1a4c8b"> </td><td>Olympian blue </td></tr>
// <tr><td className="classNameic-blue" data-clipboard-text="#0f4c81"> </td><td>classNameic blue </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="marina" data-clipboard-text="#4f84c4"> </td><td>Marina </td></tr>
// <tr><td className="campanula" data-clipboard-text="#3272af"> </td><td>Campanula </td></tr>
// <tr><td className="daphne" data-clipboard-text="#0f5f9a"> </td><td>Daphne </td></tr>
// <tr><td className="victoria-blue" data-clipboard-text="#08589d"> </td><td>Victoria blue </td></tr>
// <tr><td className="snorkel-blue" data-clipboard-text="#034f84"> </td><td>Snorkel blue </td></tr>
// <tr><td className="nautical-blue" data-clipboard-text="#1a5091"> </td><td>Nautical blue </td></tr>
// <tr><td className="princess-blue" data-clipboard-text="#00539c"> </td><td>Princess blue </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="dazzling-blue" data-clipboard-text="#3850a0"> </td><td>Dazzling blue </td></tr>
// <tr><td className="amparo-blue" data-clipboard-text="#4960a8"> </td><td>Amparo blue </td></tr>
// <tr><td className="deep-ultramarine" data-clipboard-text="#384883"> </td><td>Deep ultramarine </td></tr>
// <tr><td className="surf-the-web" data-clipboard-text="#203c7f"> </td><td>Surf the web </td></tr>
// <tr><td className="mazarine-blue" data-clipboard-text="#273c76"> </td><td>Mazarine blue </td></tr>
// <tr><td className="true-blue" data-clipboard-text="#1e4477"> </td><td>True blue </td></tr>
// <tr><td className="twilight-blue" data-clipboard-text="#313d64"> </td><td>Twilight blue </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="kentucky-blue" data-clipboard-text="#a5b3cc"> </td><td>Kentucky blue </td></tr>
// <tr><td className="cerulean" data-clipboard-text="#9bb7d4"> </td><td>Cerulean </td></tr>
// <tr><td className="powder-blue" data-clipboard-text="#96b3d2"> </td><td>Powder blue </td></tr>
// <tr><td className="forever-blue" data-clipboard-text="#899bb8"> </td><td>Forever blue </td></tr>
// <tr><td className="tempest" data-clipboard-text="#79839b"> </td><td>Tempest </td></tr>
// <tr><td className="country-blue" data-clipboard-text="#717f9b"> </td><td>Country blue </td></tr>
// <tr><td className="english-manor" data-clipboard-text="#7181a4"> </td><td>English manor </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="illusion-blue" data-clipboard-text="#c9d3dc"> </td><td>Illusion blue </td></tr>
// <tr><td className="ballad-blue" data-clipboard-text="#c0ceda"> </td><td>Ballad blue </td></tr>
// <tr><td className="baby-blue" data-clipboard-text="#b5c7d3"> </td><td>Baby blue </td></tr>
// <tr><td className="celestial-blue" data-clipboard-text="#a3b4c4"> </td><td>Celestial blue </td></tr>
// <tr><td className="blue-fog" data-clipboard-text="#9babbb"> </td><td>Blue fog </td></tr>
// <tr><td className="flint-stone" data-clipboard-text="#677283"> </td><td>Flint stone </td></tr>
// <tr><td className="folkstone-gray" data-clipboard-text="#626879"> </td><td>Folkstone gray </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="pearl-blue" data-clipboard-text="#b0b7be"> </td><td>Pearl blue </td></tr>
// <tr><td className="monument" data-clipboard-text="#84898c"> </td><td>Monument </td></tr>
// <tr><td className="dark-slate" data-clipboard-text="#46515a"> </td><td>Dark slate </td></tr>
// <tr><td className="midnight-navy" data-clipboard-text="#34414e"> </td><td>Midnight navy </td></tr>
// <tr><td className="total-eclipse" data-clipboard-text="#2c313d"> </td><td>Total eclipse </td></tr>
// <tr><td className="blue-graphite" data-clipboard-text="#323137"> </td><td>Blue graphite </td></tr>
// <tr><td className="dark-navy" data-clipboard-text="#232f36"> </td><td>Dark navy </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="ice-flow" data-clipboard-text="#c6d2d2"> </td><td>Ice flow </td></tr>
// <tr><td className="quarry" data-clipboard-text="#98a0a5"> </td><td>Quarry </td></tr>
// <tr><td className="griffin" data-clipboard-text="#8d8f8f"> </td><td>Griffin </td></tr>
// <tr><td className="dark-shadow" data-clipboard-text="#4a4b4d"> </td><td>Dark shadow </td></tr>
// <tr><td className="ombre-blue" data-clipboard-text="#434854"> </td><td>Ombre blue </td></tr>
// <tr><td className="india-ink" data-clipboard-text="#3c3f4a"> </td><td>India ink </td></tr>
// <tr><td className="ebony" data-clipboard-text="#41424a"> </td><td>Ebony </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="patriot-blue" data-clipboard-text="#363756"> </td><td>Patriot blue </td></tr>
// <tr><td className="eclipse" data-clipboard-text="#343148"> </td><td>Eclipse </td></tr>
// <tr><td className="mood-indigo" data-clipboard-text="#353a4c"> </td><td>Mood indigo </td></tr>
// <tr><td className="peacoat" data-clipboard-text="#2b2e43"> </td><td>Peacoat </td></tr>
// <tr><td className="black-iris" data-clipboard-text="#2b3042"> </td><td>Black iris </td></tr>
// <tr><td className="dress-blues" data-clipboard-text="#2a3244"> </td><td>Dress blues </td></tr>
// <tr><td className="blue-nights" data-clipboard-text="#363b48"> </td><td>Blue nights </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="angel-falls" data-clipboard-text="#a3bdd3"> </td><td>Angel falls </td></tr>
// <tr><td className="dream-blue" data-clipboard-text="#a0bcd0"> </td><td>Dream blue </td></tr>
// <tr><td className="ashley-blue" data-clipboard-text="#8699ab"> </td><td>Ashley blue </td></tr>
// <tr><td className="dusty-blue" data-clipboard-text="#8c9dad"> </td><td>Dusty blue </td></tr>
// <tr><td className="indian-teal" data-clipboard-text="#3c586b"> </td><td>Indian teal </td></tr>
// <tr><td className="stargazer" data-clipboard-text="#39505c"> </td><td>Stargazer </td></tr>
// <tr><td className="orion-blue" data-clipboard-text="#3e4f5c"> </td><td>Orion blue </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="forget-me-not" data-clipboard-text="#8fadbd"> </td><td>Forget-me-not </td></tr>
// <tr><td className="faded-denim" data-clipboard-text="#798ea4"> </td><td>Faded denim </td></tr>
// <tr><td className="blue-shadow" data-clipboard-text="#66829a"> </td><td>Blue shadow </td></tr>
// <tr><td className="coronet-blue" data-clipboard-text="#59728e"> </td><td>Coronet blue </td></tr>
// <tr><td className="captains-blue" data-clipboard-text="#557088"> </td><td>Captain's blue </td></tr>
// <tr><td className="copen-blue" data-clipboard-text="#516b84"> </td><td>Copen blue </td></tr>
// <tr><td className="china-blue" data-clipboard-text="#546477"> </td><td>China blue </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="adriatic-blue" data-clipboard-text="#5c899b"> </td><td>Adriatic blue </td></tr>
// <tr><td className="provincial-blue" data-clipboard-text="#5c798e"> </td><td>Provincial blue </td></tr>
// <tr><td className="niagara" data-clipboard-text="#5487a4"> </td><td>Niagara </td></tr>
// <tr><td className="blue-heaven" data-clipboard-text="#5b7e98"> </td><td>Blue heaven </td></tr>
// <tr><td className="stellar" data-clipboard-text="#46647e"> </td><td>Stellar </td></tr>
// <tr><td className="real-teal" data-clipboard-text="#405d73"> </td><td>Real teal </td></tr>
// <tr><td className="majolica-blue" data-clipboard-text="#274357"> </td><td>Majolica blue </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="starlight-blue" data-clipboard-text="#b5ced4"> </td><td>Starlight blue </td></tr>
// <tr><td className="winter-sky" data-clipboard-text="#a9c0cb"> </td><td>Winter sky </td></tr>
// <tr><td className="stratosphere" data-clipboard-text="#9ec1cc"> </td><td>Stratosphere </td></tr>
// <tr><td className="sterling-blue" data-clipboard-text="#a2b9c2"> </td><td>Sterling blue </td></tr>
// <tr><td className="arona" data-clipboard-text="#879ba3"> </td><td>Arona </td></tr>
// <tr><td className="citadel" data-clipboard-text="#748995"> </td><td>Citadel </td></tr>
// <tr><td className="blue-mirage" data-clipboard-text="#5c6d7c"> </td><td>Blue mirage </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="cloud-blue" data-clipboard-text="#a2b6b9"> </td><td>Cloud blue </td></tr>
// <tr><td className="ether" data-clipboard-text="#9eb6b8"> </td><td>Ether </td></tr>
// <tr><td className="cameo-blue" data-clipboard-text="#769da6"> </td><td>Cameo blue </td></tr>
// <tr><td className="stone-blue" data-clipboard-text="#829ca5"> </td><td>Stone blue </td></tr>
// <tr><td className="tourmaline" data-clipboard-text="#86a1a9"> </td><td>Tourmaline </td></tr>
// <tr><td className="smoke-blue" data-clipboard-text="#6d8994"> </td><td>Smoke blue </td></tr>
// <tr><td className="bluestone" data-clipboard-text="#577284"> </td><td>Bluestone </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="aquamarine" data-clipboard-text="#9dc3d4"> </td><td>Aquamarine </td></tr>
// <tr><td className="sky-blue" data-clipboard-text="#8abad3"> </td><td>Sky blue </td></tr>
// <tr><td className="milky-blue" data-clipboard-text="#72a8ba"> </td><td>Milky blue </td></tr>
// <tr><td className="blue-grotto" data-clipboard-text="#5cacce"> </td><td>Blue grotto </td></tr>
// <tr><td className="norse-blue" data-clipboard-text="#4ca5c7"> </td><td>Norse blue </td></tr>
// <tr><td className="aquarius" data-clipboard-text="#3cadd4"> </td><td>Aquarius </td></tr>
// <tr><td className="maui-blue" data-clipboard-text="#52a2b4"> </td><td>Maui blue </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="blue-mist" data-clipboard-text="#5bacc3"> </td><td>Blue mist </td></tr>
// <tr><td className="river-blue" data-clipboard-text="#38afcd"> </td><td>River blue </td></tr>
// <tr><td className="cyan-blue" data-clipboard-text="#14a3c7"> </td><td>Cyan blue </td></tr>
// <tr><td className="horizon-blue" data-clipboard-text="#289dbe"> </td><td>Horizon blue </td></tr>
// <tr><td className="blue-moon" data-clipboard-text="#3686a0"> </td><td>Blue moon </td></tr>
// <tr><td className="bluejay" data-clipboard-text="#157ea0"> </td><td>Bluejay </td></tr>
// <tr><td className="mediterranean-blue" data-clipboard-text="#1478a7"> </td><td>Mediterranean blue </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="bachelor-button" data-clipboard-text="#4abbd5"> </td><td>Bachelor button </td></tr>
// <tr><td className="blue-atoll" data-clipboard-text="#00b1d2"> </td><td>Blue atoll </td></tr>
// <tr><td className="vivid-blue" data-clipboard-text="#0088b0"> </td><td>Vivid blue </td></tr>
// <tr><td className="hawaiian-ocean" data-clipboard-text="#008db9"> </td><td>Hawaiian ocean </td></tr>
// <tr><td className="blue-danube" data-clipboard-text="#0087b6"> </td><td>Blue danube </td></tr>
// <tr><td className="blue-jewel" data-clipboard-text="#007baa"> </td><td>Blue jewel </td></tr>
// <tr><td className="methyl-blue" data-clipboard-text="#0074a8"> </td><td>Methyl blue </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="malibu-blue" data-clipboard-text="#008cc1"> </td><td>Malibu blue </td></tr>
// <tr><td className="blithe" data-clipboard-text="#0084bd"> </td><td>Blithe </td></tr>
// <tr><td className="swedish-blue" data-clipboard-text="#007eb1"> </td><td>Swedish blue </td></tr>
// <tr><td className="dresden-blue" data-clipboard-text="#0086bb"> </td><td>Dresden blue </td></tr>
// <tr><td className="diva-blue" data-clipboard-text="#007bb2"> </td><td>Diva blue </td></tr>
// <tr><td className="blue-aster" data-clipboard-text="#0077b3"> </td><td>Blue aster </td></tr>
// <tr><td className="cloisonne" data-clipboard-text="#0075af"> </td><td>Cloisonne </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="french-blue" data-clipboard-text="#0072b5"> </td><td>French blue </td></tr>
// <tr><td className="brilliant-blue" data-clipboard-text="#0075b3"> </td><td>Brilliant blue </td></tr>
// <tr><td className="directoire-blue" data-clipboard-text="#0061a3"> </td><td>Directoire blue </td></tr>
// <tr><td className="skydiver" data-clipboard-text="#00589b"> </td><td>Skydiver </td></tr>
// <tr><td className="imperial-blue" data-clipboard-text="#005a92"> </td><td>Imperial blue </td></tr>
// <tr><td className="deep-water" data-clipboard-text="#266691"> </td><td>Deep water </td></tr>
// <tr><td className="dark-blue" data-clipboard-text="#305679"> </td><td>Dark blue </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="pastel-blue" data-clipboard-text="#bcd3d5"> </td><td>Pastel blue </td></tr>
// <tr><td className="clearwater" data-clipboard-text="#aad5db"> </td><td>Clearwater </td></tr>
// <tr><td className="blue-glow" data-clipboard-text="#b2d4dd"> </td><td>Blue glow </td></tr>
// <tr><td className="plume" data-clipboard-text="#a5cfd5"> </td><td>Plume </td></tr>
// <tr><td className="porcelain-blue" data-clipboard-text="#95c0cb"> </td><td>Porcelain blue </td></tr>
// <tr><td className="crystal-blue" data-clipboard-text="#a1c8db"> </td><td>Crystal blue </td></tr>
// <tr><td className="petit-four" data-clipboard-text="#87c2d4"> </td><td>Petit four </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="wan-blue" data-clipboard-text="#cbdcdf"> </td><td>Wan blue </td></tr>
// <tr><td className="whispering-blue" data-clipboard-text="#c9dcdc"> </td><td>Whispering blue </td></tr>
// <tr><td className="skylight" data-clipboard-text="#c8e0e0"> </td><td>Skylight </td></tr>
// <tr><td className="aquatic" data-clipboard-text="#99c1cc"> </td><td>Aquatic </td></tr>
// <tr><td className="marine-blue" data-clipboard-text="#76afb6"> </td><td>Marine blue </td></tr>
// <tr><td className="reef-waters" data-clipboard-text="#6f9fa9"> </td><td>Reef waters </td></tr>
// <tr><td className="arctic" data-clipboard-text="#648589"> </td><td>Arctic </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="chalk-blue" data-clipboard-text="#ccdad7"> </td><td>Chalk blue </td></tr>
// <tr><td className="pale-blue" data-clipboard-text="#c4d6d3"> </td><td>Pale blue </td></tr>
// <tr><td className="misty-blue" data-clipboard-text="#bfcdcc"> </td><td>Misty blue </td></tr>
// <tr><td className="sky-gray" data-clipboard-text="#bcc8c6"> </td><td>Sky gray </td></tr>
// <tr><td className="surf-spray" data-clipboard-text="#b4c8c2"> </td><td>Surf spray </td></tr>
// <tr><td className="gray-mist" data-clipboard-text="#99aeae"> </td><td>Gray mist </td></tr>
// <tr><td className="aquifer" data-clipboard-text="#89acac"> </td><td>Aquifer </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="blue-glass" data-clipboard-text="#c6e3e1"> </td><td>Blue glass </td></tr>
// <tr><td className="icy-morn" data-clipboard-text="#b0d3d1"> </td><td>Icy morn </td></tr>
// <tr><td className="canal-blue" data-clipboard-text="#9cc2c5"> </td><td>Canal blue </td></tr>
// <tr><td className="pastel-turquoise" data-clipboard-text="#99c5c4"> </td><td>Pastel turquoise </td></tr>
// <tr><td className="aqua-haze" data-clipboard-text="#87b9bc"> </td><td>Aqua haze </td></tr>
// <tr><td className="aqua-sea" data-clipboard-text="#6baaae"> </td><td>Aqua sea </td></tr>
// <tr><td className="meadowbrook" data-clipboard-text="#60a0a3"> </td><td>Meadowbrook </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="glacier" data-clipboard-text="#c3dbd4"> </td><td>Glacier </td></tr>
// <tr><td className="fair-aqua" data-clipboard-text="#b8e2dc"> </td><td>Fair aqua </td></tr>
// <tr><td className="soothing-sea" data-clipboard-text="#c3e9e4"> </td><td>Soothing sea </td></tr>
// <tr><td className="bleached-aqua" data-clipboard-text="#bce3df"> </td><td>Bleached aqua </td></tr>
// <tr><td className="blue-light" data-clipboard-text="#acdfdd"> </td><td>Blue light </td></tr>
// <tr><td className="blue-tint" data-clipboard-text="#9fd9d7"> </td><td>Blue tint </td></tr>
// <tr><td className="aqua-sky" data-clipboard-text="#7bc4c4"> </td><td>Aqua sky </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="morning-mist" data-clipboard-text="#cfdfdb"> </td><td>Morning mist </td></tr>
// <tr><td className="harbor-gray" data-clipboard-text="#a8c0bb"> </td><td>Harbor gray </td></tr>
// <tr><td className="eggshell-blue" data-clipboard-text="#a3ccc9"> </td><td>Eggshell blue </td></tr>
// <tr><td className="dusty-turquoise" data-clipboard-text="#649b9e"> </td><td>Dusty turquoise </td></tr>
// <tr><td className="porcelain" data-clipboard-text="#5d9ca4"> </td><td>Porcelain </td></tr>
// <tr><td className="brittany-blue" data-clipboard-text="#4c7e86"> </td><td>Brittany blue </td></tr>
// <tr><td className="hydro" data-clipboard-text="#426972"> </td><td>Hydro </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="blue-haze" data-clipboard-text="#a5bcbb"> </td><td>Blue haze </td></tr>
// <tr><td className="nile-blue" data-clipboard-text="#76a7ab"> </td><td>Nile blue </td></tr>
// <tr><td className="mineral-blue" data-clipboard-text="#6d9192"> </td><td>Mineral blue </td></tr>
// <tr><td className="bristol-blue" data-clipboard-text="#558f91"> </td><td>Bristol blue </td></tr>
// <tr><td className="teal" data-clipboard-text="#478589"> </td><td>Teal </td></tr>
// <tr><td className="blue-spruce" data-clipboard-text="#486b67"> </td><td>Blue spruce </td></tr>
// <tr><td className="sagebrush-green" data-clipboard-text="#567572"> </td><td>Sagebrush green </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="green-milieu" data-clipboard-text="#8a9992"> </td><td>Green milieu </td></tr>
// <tr><td className="jadeite" data-clipboard-text="#95a69f"> </td><td>Jadeite </td></tr>
// <tr><td className="blue-surf" data-clipboard-text="#90a8a4"> </td><td>Blue surf </td></tr>
// <tr><td className="oil-blue" data-clipboard-text="#658c88"> </td><td>Oil blue </td></tr>
// <tr><td className="trellis" data-clipboard-text="#6a8988"> </td><td>Trellis </td></tr>
// <tr><td className="north-atlantic" data-clipboard-text="#536d70"> </td><td>North atlantic </td></tr>
// <tr><td className="sea-pine" data-clipboard-text="#4c6969"> </td><td>Sea pine </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="slate" data-clipboard-text="#8c9fa1"> </td><td>Slate </td></tr>
// <tr><td className="silver-blue" data-clipboard-text="#8a9a9a"> </td><td>Silver blue </td></tr>
// <tr><td className="abyss" data-clipboard-text="#8f9e9d"> </td><td>Abyss </td></tr>
// <tr><td className="lead" data-clipboard-text="#7a898f"> </td><td>Lead </td></tr>
// <tr><td className="stormy-sea" data-clipboard-text="#6e8082"> </td><td>Stormy sea </td></tr>
// <tr><td className="trooper" data-clipboard-text="#697a7e"> </td><td>Trooper </td></tr>
// <tr><td className="goblin-blue" data-clipboard-text="#5f7278"> </td><td>Goblin blue </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="slate-gray" data-clipboard-text="#8a9691"> </td><td>Slate gray </td></tr>
// <tr><td className="chinois-green" data-clipboard-text="#7c8c87"> </td><td>Chinois green </td></tr>
// <tr><td className="dark-forest" data-clipboard-text="#556962"> </td><td>Dark forest </td></tr>
// <tr><td className="balsam-green" data-clipboard-text="#576664"> </td><td>Balsam green </td></tr>
// <tr><td className="beetle" data-clipboard-text="#55584c"> </td><td>Beetle </td></tr>
// <tr><td className="urban-chic" data-clipboard-text="#464e4d"> </td><td>Urban chic </td></tr>
// <tr><td className="darkest-spruce" data-clipboard-text="#303d3c"> </td><td>Darkest spruce </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="mallard-blue" data-clipboard-text="#3a5c6e"> </td><td>Mallard blue </td></tr>
// <tr><td className="celestial" data-clipboard-text="#006380"> </td><td>Celestial </td></tr>
// <tr><td className="saxony-blue" data-clipboard-text="#1f6680"> </td><td>Saxony blue </td></tr>
// <tr><td className="lyons-blue" data-clipboard-text="#005871"> </td><td>Lyons blue </td></tr>
// <tr><td className="ink-blue" data-clipboard-text="#0b5369"> </td><td>Ink blue </td></tr>
// <tr><td className="corsair" data-clipboard-text="#18576c"> </td><td>Corsair </td></tr>
// <tr><td className="legion-blue" data-clipboard-text="#1f495b"> </td><td>Legion blue </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="aegean-blue" data-clipboard-text="#4e6e81"> </td><td>Aegean blue </td></tr>
// <tr><td className="bluesteel" data-clipboard-text="#35637c"> </td><td>Bluesteel </td></tr>
// <tr><td className="blue-ashes" data-clipboard-text="#3b5f78"> </td><td>Blue ashes </td></tr>
// <tr><td className="midnight" data-clipboard-text="#325b74"> </td><td>Midnight </td></tr>
// <tr><td className="blue-sapphire" data-clipboard-text="#09577b"> </td><td>Blue sapphire </td></tr>
// <tr><td className="seaport" data-clipboard-text="#005e7d"> </td><td>Seaport </td></tr>
// <tr><td className="moroccan-blue" data-clipboard-text="#0f4e67"> </td><td>Moroccan blue </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="ocean-depths" data-clipboard-text="#006175"> </td><td>Ocean depths </td></tr>
// <tr><td className="blue-coral" data-clipboard-text="#1b5366"> </td><td>Blue coral </td></tr>
// <tr><td className="dragonfly" data-clipboard-text="#2a5c6a"> </td><td>Dragonfly </td></tr>
// <tr><td className="pacific" data-clipboard-text="#1f595c"> </td><td>Pacific </td></tr>
// <tr><td className="balsam" data-clipboard-text="#33565e"> </td><td>Balsam </td></tr>
// <tr><td className="mediterranea" data-clipboard-text="#32575d"> </td><td>Mediterranea </td></tr>
// <tr><td className="atlantic-deep" data-clipboard-text="#274e55"> </td><td>Atlantic deep </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="aqua" data-clipboard-text="#64a1ad"> </td><td>Aqua </td></tr>
// <tr><td className="stillwater" data-clipboard-text="#70a4b0"> </td><td>Stillwater </td></tr>
// <tr><td className="delphinium-blue" data-clipboard-text="#6198ae"> </td><td>Delphinium blue </td></tr>
// <tr><td className="larkspur" data-clipboard-text="#3c7d90"> </td><td>Larkspur </td></tr>
// <tr><td className="storm-blue" data-clipboard-text="#47788a"> </td><td>Storm blue </td></tr>
// <tr><td className="tapestry" data-clipboard-text="#436573"> </td><td>Tapestry </td></tr>
// <tr><td className="colonial-blue" data-clipboard-text="#2d6471"> </td><td>Colonial blue </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="peacock-blue" data-clipboard-text="#00a0b0"> </td><td>Peacock blue </td></tr>
// <tr><td className="capri-breeze" data-clipboard-text="#008799"> </td><td>Capri breeze </td></tr>
// <tr><td className="algiers-blue" data-clipboard-text="#00859c"> </td><td>Algiers blue </td></tr>
// <tr><td className="caneel-bay" data-clipboard-text="#00849f"> </td><td>Caneel bay </td></tr>
// <tr><td className="caribbean-sea" data-clipboard-text="#00819d"> </td><td>Caribbean sea </td></tr>
// <tr><td className="mosaic-blue" data-clipboard-text="#00758f"> </td><td>Mosaic blue </td></tr>
// <tr><td className="turkish-tile" data-clipboard-text="#00698b"> </td><td>Turkish tile </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="angel-blue" data-clipboard-text="#83c5cd"> </td><td>Angel blue </td></tr>
// <tr><td className="blue-radiance" data-clipboard-text="#58c9d4"> </td><td>Blue radiance </td></tr>
// <tr><td className="capri" data-clipboard-text="#44bbca"> </td><td>Capri </td></tr>
// <tr><td className="blue-curacao" data-clipboard-text="#32becc"> </td><td>Blue curacao </td></tr>
// <tr><td className="scuba-blue" data-clipboard-text="#00abc0"> </td><td>Scuba blue </td></tr>
// <tr><td className="bluebird" data-clipboard-text="#009dae"> </td><td>Bluebird </td></tr>
// <tr><td className="enamel-blue" data-clipboard-text="#007a8e"> </td><td>Enamel blue </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="pool-blue" data-clipboard-text="#67bcb3"> </td><td>Pool blue </td></tr>
// <tr><td className="blue-turquoise" data-clipboard-text="#53b0ae"> </td><td>Blue turquoise </td></tr>
// <tr><td className="baltic" data-clipboard-text="#279d9f"> </td><td>Baltic </td></tr>
// <tr><td className="lake-blue" data-clipboard-text="#008c96"> </td><td>Lake blue </td></tr>
// <tr><td className="tile-blue" data-clipboard-text="#008491"> </td><td>Tile blue </td></tr>
// <tr><td className="pagoda-blue" data-clipboard-text="#1a7f8e"> </td><td>Pagoda blue </td></tr>
// <tr><td className="biscay-bay" data-clipboard-text="#097988"> </td><td>Biscay bay </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="aruba-blue" data-clipboard-text="#81d7d3"> </td><td>Aruba blue </td></tr>
// <tr><td className="ceramic" data-clipboard-text="#00aaa9"> </td><td>Ceramic </td></tr>
// <tr><td className="viridian-green" data-clipboard-text="#009499"> </td><td>Viridian green </td></tr>
// <tr><td className="tropical-green" data-clipboard-text="#008786"> </td><td>Tropical green </td></tr>
// <tr><td className="navigate" data-clipboard-text="#008583"> </td><td>Navigate </td></tr>
// <tr><td className="deep-peacock-blue" data-clipboard-text="#008381"> </td><td>Deep peacock blue </td></tr>
// <tr><td className="lapis" data-clipboard-text="#008684"> </td><td>Lapis </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="turquoise" data-clipboard-text="#45b5aa"> </td><td>Turquoise </td></tr>
// <tr><td className="waterfall" data-clipboard-text="#3ab0a2"> </td><td>Waterfall </td></tr>
// <tr><td className="lagoon" data-clipboard-text="#4d9e9a"> </td><td>Lagoon </td></tr>
// <tr><td className="bright-aqua" data-clipboard-text="#30a299"> </td><td>Bright aqua </td></tr>
// <tr><td className="porcelain-green" data-clipboard-text="#108780"> </td><td>Porcelain green </td></tr>
// <tr><td className="blue-grass" data-clipboard-text="#007c7a"> </td><td>Blue grass </td></tr>
// <tr><td className="fanfare" data-clipboard-text="#006d70"> </td><td>Fanfare </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="atlantis" data-clipboard-text="#00af9f"> </td><td>Atlantis </td></tr>
// <tr><td className="pool-green" data-clipboard-text="#00af9d"> </td><td>Pool green </td></tr>
// <tr><td className="dynasty-green" data-clipboard-text="#008e80"> </td><td>Dynasty green </td></tr>
// <tr><td className="spectra-green" data-clipboard-text="#009b8c"> </td><td>Spectra green </td></tr>
// <tr><td className="columbia" data-clipboard-text="#009288"> </td><td>Columbia </td></tr>
// <tr><td className="teal-blue" data-clipboard-text="#007f7c"> </td><td>Teal blue </td></tr>
// <tr><td className="parasailing" data-clipboard-text="#00736c"> </td><td>Parasailing </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="wasabi" data-clipboard-text="#73a89e"> </td><td>Wasabi </td></tr>
// <tr><td className="beryl-green" data-clipboard-text="#619187"> </td><td>Beryl green </td></tr>
// <tr><td className="deep-sea" data-clipboard-text="#4f7c74"> </td><td>Deep sea </td></tr>
// <tr><td className="bottle-green" data-clipboard-text="#427d6d"> </td><td>Bottle green </td></tr>
// <tr><td className="galapagos-green" data-clipboard-text="#29685f"> </td><td>Galapagos green </td></tr>
// <tr><td className="antique-green" data-clipboard-text="#29675c"> </td><td>Antique green </td></tr>
// <tr><td className="storm" data-clipboard-text="#035453"> </td><td>Storm </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="marine-green" data-clipboard-text="#40a48e"> </td><td>Marine green </td></tr>
// <tr><td className="sea-green" data-clipboard-text="#149c88"> </td><td>Sea green </td></tr>
// <tr><td className="greenlake" data-clipboard-text="#007d69"> </td><td>Greenlake </td></tr>
// <tr><td className="tidepool" data-clipboard-text="#0a6f69"> </td><td>Tidepool </td></tr>
// <tr><td className="ivy" data-clipboard-text="#226c63"> </td><td>Ivy </td></tr>
// <tr><td className="cadmium-green" data-clipboard-text="#00675b"> </td><td>Cadmium green </td></tr>
// <tr><td className="alpine-green" data-clipboard-text="#005f56"> </td><td>Alpine green </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="canton" data-clipboard-text="#6da29e"> </td><td>Canton </td></tr>
// <tr><td className="agate-green" data-clipboard-text="#599f99"> </td><td>Agate green </td></tr>
// <tr><td className="sea-blue" data-clipboard-text="#549f98"> </td><td>Sea blue </td></tr>
// <tr><td className="latigo-bay" data-clipboard-text="#379190"> </td><td>Latigo bay </td></tr>
// <tr><td className="green-blue-slate" data-clipboard-text="#358082"> </td><td>Green-blue slate </td></tr>
// <tr><td className="bayou" data-clipboard-text="#20706f"> </td><td>Bayou </td></tr>
// <tr><td className="north-sea" data-clipboard-text="#316c6b"> </td><td>North sea </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="deep-jungle" data-clipboard-text="#36716f"> </td><td>Deep jungle </td></tr>
// <tr><td className="everglade" data-clipboard-text="#005b5d"> </td><td>Everglade </td></tr>
// <tr><td className="teal-green" data-clipboard-text="#006361"> </td><td>Teal green </td></tr>
// <tr><td className="harbor-blue" data-clipboard-text="#00656e"> </td><td>Harbor blue </td></tr>
// <tr><td className="deep-lake" data-clipboard-text="#00656b"> </td><td>Deep lake </td></tr>
// <tr><td className="shaded-spruce" data-clipboard-text="#00585e"> </td><td>Shaded spruce </td></tr>
// <tr><td className="deep-teal" data-clipboard-text="#18454b"> </td><td>Deep teal </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="silver-pine" data-clipboard-text="#4e6866"> </td><td>Silver pine </td></tr>
// <tr><td className="mallard-green" data-clipboard-text="#405e5c"> </td><td>Mallard green </td></tr>
// <tr><td className="bistro-green" data-clipboard-text="#395551"> </td><td>Bistro green </td></tr>
// <tr><td className="jasper" data-clipboard-text="#335959"> </td><td>Jasper </td></tr>
// <tr><td className="bayberry" data-clipboard-text="#255958"> </td><td>Bayberry </td></tr>
// <tr><td className="june-bug" data-clipboard-text="#264a48"> </td><td>June bug </td></tr>
// <tr><td className="ponderosa-pine" data-clipboard-text="#203b3d"> </td><td>Ponderosa pine </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="aqua-glass" data-clipboard-text="#d2e8e0"> </td><td>Aqua glass </td></tr>
// <tr><td className="opal-blue" data-clipboard-text="#c3ddd6"> </td><td>Opal blue </td></tr>
// <tr><td className="dusty-aqua" data-clipboard-text="#c0dccd"> </td><td>Dusty aqua </td></tr>
// <tr><td className="ocean-wave" data-clipboard-text="#8ec5b6"> </td><td>Ocean wave </td></tr>
// <tr><td className="holiday" data-clipboard-text="#81c3b4"> </td><td>Holiday </td></tr>
// <tr><td className="cascade" data-clipboard-text="#76c1b2"> </td><td>Cascade </td></tr>
// <tr><td className="dusty-jade-green" data-clipboard-text="#7bb5a3"> </td><td>Dusty jade green </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="honeydew" data-clipboard-text="#bae1d3"> </td><td>Honeydew </td></tr>
// <tr><td className="brook-green" data-clipboard-text="#afddcc"> </td><td>Brook green </td></tr>
// <tr><td className="cabbage" data-clipboard-text="#87d7be"> </td><td>Cabbage </td></tr>
// <tr><td className="beveled-glass" data-clipboard-text="#7accb8"> </td><td>Beveled glass </td></tr>
// <tr><td className="opal" data-clipboard-text="#77cfb7"> </td><td>Opal </td></tr>
// <tr><td className="biscay-green" data-clipboard-text="#55c6a9"> </td><td>Biscay green </td></tr>
// <tr><td className="spearmint" data-clipboard-text="#64bfa4"> </td><td>Spearmint </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="moonlight-jade" data-clipboard-text="#c7e5df"> </td><td>Moonlight jade </td></tr>
// <tr><td className="bay" data-clipboard-text="#bae5d6"> </td><td>Bay </td></tr>
// <tr><td className="yucca" data-clipboard-text="#a1d7c9"> </td><td>Yucca </td></tr>
// <tr><td className="beach-glass" data-clipboard-text="#96dfce"> </td><td>Beach glass </td></tr>
// <tr><td className="ice-green" data-clipboard-text="#87d8c3"> </td><td>Ice green </td></tr>
// <tr><td className="cockatoo" data-clipboard-text="#58c8b6"> </td><td>Cockatoo </td></tr>
// <tr><td className="florida-keys" data-clipboard-text="#56beab"> </td><td>Florida keys </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="bermuda" data-clipboard-text="#60c9b3"> </td><td>Bermuda </td></tr>
// <tr><td className="electric-green" data-clipboard-text="#4bc3a8"> </td><td>Electric green </td></tr>
// <tr><td className="aqua-green" data-clipboard-text="#00b89f"> </td><td>Aqua green </td></tr>
// <tr><td className="billiard" data-clipboard-text="#00aa92"> </td><td>Billiard </td></tr>
// <tr><td className="arcadia" data-clipboard-text="#00a28a"> </td><td>Arcadia </td></tr>
// <tr><td className="alhambra" data-clipboard-text="#008778"> </td><td>Alhambra </td></tr>
// <tr><td className="deep-green" data-clipboard-text="#009276"> </td><td>Deep green </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="mint-leaf" data-clipboard-text="#00b694"> </td><td>Mint leaf </td></tr>
// <tr><td className="peacock-green" data-clipboard-text="#00a78b"> </td><td>Peacock green </td></tr>
// <tr><td className="vivid-green" data-clipboard-text="#009e82"> </td><td>Vivid green </td></tr>
// <tr><td className="emerald" data-clipboard-text="#009473"> </td><td>Emerald </td></tr>
// <tr><td className="viridis" data-clipboard-text="#00846b"> </td><td>Viridis </td></tr>
// <tr><td className="shady-glade" data-clipboard-text="#006e5b"> </td><td>Shady glade </td></tr>
// <tr><td className="ultramarine-green" data-clipboard-text="#006b54"> </td><td>Ultramarine green </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="silt-green" data-clipboard-text="#a9bdb1"> </td><td>Silt green </td></tr>
// <tr><td className="frosty-green" data-clipboard-text="#a3b5a6"> </td><td>Frosty green </td></tr>
// <tr><td className="iceberg-green" data-clipboard-text="#8c9c92"> </td><td>Iceberg green </td></tr>
// <tr><td className="granite-green" data-clipboard-text="#86a293"> </td><td>Granite green </td></tr>
// <tr><td className="green-bay" data-clipboard-text="#7e9285"> </td><td>Green bay </td></tr>
// <tr><td className="lily-pad" data-clipboard-text="#818f84"> </td><td>Lily pad </td></tr>
// <tr><td className="laurel-wreath" data-clipboard-text="#616f65"> </td><td>Laurel wreath </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="green-spruce" data-clipboard-text="#589f7e"> </td><td>Green spruce </td></tr>
// <tr><td className="comfrey" data-clipboard-text="#5b7961"> </td><td>Comfrey </td></tr>
// <tr><td className="dark-ivy" data-clipboard-text="#5b7763"> </td><td>Dark ivy </td></tr>
// <tr><td className="foliage-green" data-clipboard-text="#3e6f58"> </td><td>Foliage green </td></tr>
// <tr><td className="myrtle" data-clipboard-text="#4f6b58"> </td><td>Myrtle </td></tr>
// <tr><td className="posy-green" data-clipboard-text="#325b51"> </td><td>Posy green </td></tr>
// <tr><td className="pineneedle" data-clipboard-text="#334d41"> </td><td>Pineneedle </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="sea-spray" data-clipboard-text="#717e6f"> </td><td>Sea spray </td></tr>
// <tr><td className="duck-green" data-clipboard-text="#53665c"> </td><td>Duck green </td></tr>
// <tr><td className="frosty-spruce" data-clipboard-text="#578270"> </td><td>Frosty spruce </td></tr>
// <tr><td className="fir" data-clipboard-text="#3a725f"> </td><td>Fir </td></tr>
// <tr><td className="evergreen" data-clipboard-text="#11574a"> </td><td>Evergreen </td></tr>
// <tr><td className="hunter-green" data-clipboard-text="#335749"> </td><td>Hunter green </td></tr>
// <tr><td className="dark-green" data-clipboard-text="#314f40"> </td><td>Dark green </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="feldspar" data-clipboard-text="#729b8b"> </td><td>Feldspar </td></tr>
// <tr><td className="smoke-pine" data-clipboard-text="#3e6257"> </td><td>Smoke pine </td></tr>
// <tr><td className="trekking-green" data-clipboard-text="#355048"> </td><td>Trekking green </td></tr>
// <tr><td className="garden-topiary" data-clipboard-text="#3e524b"> </td><td>Garden topiary </td></tr>
// <tr><td className="jungle-green" data-clipboard-text="#3c4e47"> </td><td>Jungle green </td></tr>
// <tr><td className="sycamore" data-clipboard-text="#35463d"> </td><td>Sycamore </td></tr>
// <tr><td className="green-gables" data-clipboard-text="#324241"> </td><td>Green gables </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="vetiver" data-clipboard-text="#807d6f"> </td><td>Vetiver </td></tr>
// <tr><td className="deep-lichen-green" data-clipboard-text="#6e6e5c"> </td><td>Deep lichen green </td></tr>
// <tr><td className="thyme" data-clipboard-text="#50574c"> </td><td>Thyme </td></tr>
// <tr><td className="kombu-green" data-clipboard-text="#3a4032"> </td><td>Kombu green </td></tr>
// <tr><td className="deep-forest" data-clipboard-text="#37413a"> </td><td>Deep forest </td></tr>
// <tr><td className="forest-night" data-clipboard-text="#434237"> </td><td>Forest night </td></tr>
// <tr><td className="rosin" data-clipboard-text="#36362d"> </td><td>Rosin </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="celadon" data-clipboard-text="#b8ccba"> </td><td>Celadon </td></tr>
// <tr><td className="pale-aqua" data-clipboard-text="#c1ccc2"> </td><td>Pale aqua </td></tr>
// <tr><td className="smoke" data-clipboard-text="#bfc8c3"> </td><td>Smoke </td></tr>
// <tr><td className="foggy-dew" data-clipboard-text="#d1d5d0"> </td><td>Foggy dew </td></tr>
// <tr><td className="mercury" data-clipboard-text="#bac2ba"> </td><td>Mercury </td></tr>
// <tr><td className="mineral-gray" data-clipboard-text="#b2b6ac"> </td><td>Mineral gray </td></tr>
// <tr><td className="aqua-gray" data-clipboard-text="#a5b2aa"> </td><td>Aqua gray </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="fairest-jade" data-clipboard-text="#d8e3d7"> </td><td>Fairest jade </td></tr>
// <tr><td className="water-lily" data-clipboard-text="#dde3d5"> </td><td>Water lily </td></tr>
// <tr><td className="canary-green" data-clipboard-text="#d6dec9"> </td><td>Canary green </td></tr>
// <tr><td className="almost-aqua" data-clipboard-text="#cad3c1"> </td><td>Almost aqua </td></tr>
// <tr><td className="green-tint" data-clipboard-text="#c5ccc0"> </td><td>Green tint </td></tr>
// <tr><td className="sea-foam" data-clipboard-text="#b7c2b2"> </td><td>Sea foam </td></tr>
// <tr><td className="desert-sage" data-clipboard-text="#a7ae9e"> </td><td>Desert sage </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="whisper-green" data-clipboard-text="#e0e6d7"> </td><td>Whisper green </td></tr>
// <tr><td className="celadon-tint" data-clipboard-text="#cbcebe"> </td><td>Celadon tint </td></tr>
// <tr><td className="dewkist" data-clipboard-text="#c4d1c2"> </td><td>Dewkist </td></tr>
// <tr><td className="green-lily" data-clipboard-text="#c1cec1"> </td><td>Green lily </td></tr>
// <tr><td className="cameo-green" data-clipboard-text="#aac0ad"> </td><td>Cameo green </td></tr>
// <tr><td className="seagrass" data-clipboard-text="#959889"> </td><td>Seagrass </td></tr>
// <tr><td className="shadow" data-clipboard-text="#888d82"> </td><td>Shadow </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="clearly-aqua" data-clipboard-text="#cee1d4"> </td><td>Clearly aqua </td></tr>
// <tr><td className="misty-jade" data-clipboard-text="#bcd9c8"> </td><td>Misty jade </td></tr>
// <tr><td className="subtle-green" data-clipboard-text="#b5cbbb"> </td><td>Subtle green </td></tr>
// <tr><td className="aqua-foam" data-clipboard-text="#adc3b4"> </td><td>Aqua foam </td></tr>
// <tr><td className="gossamer-green" data-clipboard-text="#b2cfbe"> </td><td>Gossamer green </td></tr>
// <tr><td className="lichen" data-clipboard-text="#9bc2b1"> </td><td>Lichen </td></tr>
// <tr><td className="grayed-jade" data-clipboard-text="#9bbea9"> </td><td>Grayed jade </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="milky-green" data-clipboard-text="#cfdbd1"> </td><td>Milky green </td></tr>
// <tr><td className="phantom-green" data-clipboard-text="#dce4d7"> </td><td>Phantom green </td></tr>
// <tr><td className="mist-green" data-clipboard-text="#aacebc"> </td><td>Mist green </td></tr>
// <tr><td className="birds-egg-green" data-clipboard-text="#aaccb9"> </td><td>Bird's egg green </td></tr>
// <tr><td className="bok-choy" data-clipboard-text="#bccab3"> </td><td>Bok choy </td></tr>
// <tr><td className="smoke-green" data-clipboard-text="#a8bba2"> </td><td>Smoke green </td></tr>
// <tr><td className="malachite-green" data-clipboard-text="#709a89"> </td><td>Malachite green </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="mistletoe" data-clipboard-text="#8aa282"> </td><td>Mistletoe </td></tr>
// <tr><td className="basil" data-clipboard-text="#879f84"> </td><td>Basil </td></tr>
// <tr><td className="mineral-green" data-clipboard-text="#7a9b78"> </td><td>Mineral green </td></tr>
// <tr><td className="green-eyes" data-clipboard-text="#7d956d"> </td><td>Green eyes </td></tr>
// <tr><td className="turf-green" data-clipboard-text="#6f8c69"> </td><td>Turf green </td></tr>
// <tr><td className="watercress" data-clipboard-text="#748c69"> </td><td>Watercress </td></tr>
// <tr><td className="elm-green" data-clipboard-text="#547053"> </td><td>Elm green </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="hedge-green" data-clipboard-text="#768a75"> </td><td>Hedge green </td></tr>
// <tr><td className="loden-frost" data-clipboard-text="#788f74"> </td><td>Loden frost </td></tr>
// <tr><td className="shale-green" data-clipboard-text="#739072"> </td><td>Shale green </td></tr>
// <tr><td className="kashmir" data-clipboard-text="#6f8d6a"> </td><td>Kashmir </td></tr>
// <tr><td className="stone-green" data-clipboard-text="#658e67"> </td><td>Stone green </td></tr>
// <tr><td className="english-ivy" data-clipboard-text="#61845b"> </td><td>English ivy </td></tr>
// <tr><td className="deep-grass-green" data-clipboard-text="#558367"> </td><td>Deep grass green </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="piquant-green" data-clipboard-text="#769358"> </td><td>Piquant green </td></tr>
// <tr><td className="forest-green" data-clipboard-text="#6b8d53"> </td><td>Forest green </td></tr>
// <tr><td className="fluorite-green" data-clipboard-text="#699158"> </td><td>Fluorite green </td></tr>
// <tr><td className="cactus" data-clipboard-text="#53713d"> </td><td>Cactus </td></tr>
// <tr><td className="garden-green" data-clipboard-text="#495e35"> </td><td>Garden green </td></tr>
// <tr><td className="artichoke-green" data-clipboard-text="#4b6d41"> </td><td>Artichoke green </td></tr>
// <tr><td className="willow-bough" data-clipboard-text="#59754d"> </td><td>Willow bough </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="aspen-green" data-clipboard-text="#7e9b76"> </td><td>Aspen green </td></tr>
// <tr><td className="medium-green" data-clipboard-text="#3c824e"> </td><td>Medium green </td></tr>
// <tr><td className="juniper" data-clipboard-text="#3d7245"> </td><td>Juniper </td></tr>
// <tr><td className="fairway" data-clipboard-text="#477050"> </td><td>Fairway </td></tr>
// <tr><td className="vineyard-green" data-clipboard-text="#5f7355"> </td><td>Vineyard green </td></tr>
// <tr><td className="dill" data-clipboard-text="#6f7755"> </td><td>Dill </td></tr>
// <tr><td className="greener-pastures" data-clipboard-text="#37503d"> </td><td>Greener pastures </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="four-leaf-clover" data-clipboard-text="#616652"> </td><td>Four leaf clover </td></tr>
// <tr><td className="bronze-green" data-clipboard-text="#525f48"> </td><td>Bronze green </td></tr>
// <tr><td className="chive" data-clipboard-text="#4a5335"> </td><td>Chive </td></tr>
// <tr><td className="cypress" data-clipboard-text="#545a3e"> </td><td>Cypress </td></tr>
// <tr><td className="black-forest" data-clipboard-text="#414f3c"> </td><td>Black forest </td></tr>
// <tr><td className="rifle-green" data-clipboard-text="#414832"> </td><td>Rifle green </td></tr>
// <tr><td className="duffel-bag" data-clipboard-text="#394034"> </td><td>Duffel bag </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="ambrosia" data-clipboard-text="#d2e7ca"> </td><td>Ambrosia </td></tr>
// <tr><td className="spray" data-clipboard-text="#bed3bb"> </td><td>Spray </td></tr>
// <tr><td className="pastel-green" data-clipboard-text="#b4d3b2"> </td><td>Pastel green </td></tr>
// <tr><td className="hemlock" data-clipboard-text="#97c1a1"> </td><td>Hemlock </td></tr>
// <tr><td className="sprucestone" data-clipboard-text="#9fc09c"> </td><td>Sprucestone </td></tr>
// <tr><td className="meadow" data-clipboard-text="#8bba94"> </td><td>Meadow </td></tr>
// <tr><td className="jadesheen" data-clipboard-text="#77a276"> </td><td>Jadesheen </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="green-ash" data-clipboard-text="#a0daa9"> </td><td>Green ash </td></tr>
// <tr><td className="greengage" data-clipboard-text="#8bc28c"> </td><td>Greengage </td></tr>
// <tr><td className="ming" data-clipboard-text="#7cb08a"> </td><td>Ming </td></tr>
// <tr><td className="zephyr-green" data-clipboard-text="#7cb083"> </td><td>Zephyr green </td></tr>
// <tr><td className="peapod" data-clipboard-text="#82b185"> </td><td>Peapod </td></tr>
// <tr><td className="light-grass-green" data-clipboard-text="#7cb68e"> </td><td>Light grass green </td></tr>
// <tr><td className="absinthe-green" data-clipboard-text="#76b583"> </td><td>Absinthe green </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="neptune-green" data-clipboard-text="#7fbb9e"> </td><td>Neptune green </td></tr>
// <tr><td className="creme-de-menthe" data-clipboard-text="#70a38d"> </td><td>Creme de menthe </td></tr>
// <tr><td className="winter-green" data-clipboard-text="#4f9e81"> </td><td>Winter green </td></tr>
// <tr><td className="gumdrop-green" data-clipboard-text="#2ea785"> </td><td>Gumdrop green </td></tr>
// <tr><td className="holly-green" data-clipboard-text="#0f9d76"> </td><td>Holly green </td></tr>
// <tr><td className="parakeet" data-clipboard-text="#008c69"> </td><td>Parakeet </td></tr>
// <tr><td className="golf-green" data-clipboard-text="#008763"> </td><td>Golf green </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="spring-bud" data-clipboard-text="#6bcd9c"> </td><td>Spring bud </td></tr>
// <tr><td className="katydid" data-clipboard-text="#66bc91"> </td><td>Katydid </td></tr>
// <tr><td className="jade-cream" data-clipboard-text="#60b892"> </td><td>Jade cream </td></tr>
// <tr><td className="ming-green" data-clipboard-text="#3aa278"> </td><td>Ming green </td></tr>
// <tr><td className="greenbriar" data-clipboard-text="#4b9b69"> </td><td>Greenbriar </td></tr>
// <tr><td className="leprechaun" data-clipboard-text="#378661"> </td><td>Leprechaun </td></tr>
// <tr><td className="pine-green" data-clipboard-text="#3a795e"> </td><td>Pine green </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="blarney" data-clipboard-text="#00a776"> </td><td>Blarney </td></tr>
// <tr><td className="mint" data-clipboard-text="#00a170"> </td><td>Mint </td></tr>
// <tr><td className="deep-mint" data-clipboard-text="#009e6d"> </td><td>Deep mint </td></tr>
// <tr><td className="simply-green" data-clipboard-text="#009b75"> </td><td>Simply green </td></tr>
// <tr><td className="pepper-green" data-clipboard-text="#007d60"> </td><td>Pepper green </td></tr>
// <tr><td className="bosphorus" data-clipboard-text="#007558"> </td><td>Bosphorus </td></tr>
// <tr><td className="verdant-green" data-clipboard-text="#12674a"> </td><td>Verdant green </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="seacrest" data-clipboard-text="#bfd1b3"> </td><td>Seacrest </td></tr>
// <tr><td className="gleam" data-clipboard-text="#bfd1ad"> </td><td>Gleam </td></tr>
// <tr><td className="nile-green" data-clipboard-text="#a7c796"> </td><td>Nile green </td></tr>
// <tr><td className="quiet-green" data-clipboard-text="#9ebc97"> </td><td>Quiet green </td></tr>
// <tr><td className="fair-green" data-clipboard-text="#92af88"> </td><td>Fair green </td></tr>
// <tr><td className="forest-shade" data-clipboard-text="#91ac80"> </td><td>Forest shade </td></tr>
// <tr><td className="jade-green" data-clipboard-text="#759465"> </td><td>Jade green </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="patina-green" data-clipboard-text="#b9eab3"> </td><td>Patina green </td></tr>
// <tr><td className="pistachio-green" data-clipboard-text="#a9d39e"> </td><td>Pistachio green </td></tr>
// <tr><td className="arcadian-green" data-clipboard-text="#a3c893"> </td><td>Arcadian green </td></tr>
// <tr><td className="grass-green" data-clipboard-text="#7bb369"> </td><td>Grass green </td></tr>
// <tr><td className="bud-green" data-clipboard-text="#79b465"> </td><td>Bud green </td></tr>
// <tr><td className="green-tea" data-clipboard-text="#86a96f"> </td><td>Green tea </td></tr>
// <tr><td className="tendril" data-clipboard-text="#89a06b"> </td><td>Tendril </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="paradise-green" data-clipboard-text="#b2e79f"> </td><td>Paradise green </td></tr>
// <tr><td className="lime-green" data-clipboard-text="#9fc131"> </td><td>Lime green </td></tr>
// <tr><td className="jasmine-green" data-clipboard-text="#7ec845"> </td><td>Jasmine green </td></tr>
// <tr><td className="green-flash" data-clipboard-text="#79c753"> </td><td>Green flash </td></tr>
// <tr><td className="classNameic-green" data-clipboard-text="#39a845"> </td><td>classNameic green </td></tr>
// <tr><td className="online-lime" data-clipboard-text="#44883c"> </td><td>Online lime </td></tr>
// <tr><td className="treetop" data-clipboard-text="#476a30"> </td><td>Treetop </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="summer-green" data-clipboard-text="#7ed37f"> </td><td>Summer green </td></tr>
// <tr><td className="spring-bouquet" data-clipboard-text="#6dce87"> </td><td>Spring bouquet </td></tr>
// <tr><td className="island-green" data-clipboard-text="#2bae66"> </td><td>Island green </td></tr>
// <tr><td className="irish-green" data-clipboard-text="#45be76"> </td><td>Irish green </td></tr>
// <tr><td className="shamrock" data-clipboard-text="#6fa26b"> </td><td>Shamrock </td></tr>
// <tr><td className="peppermint" data-clipboard-text="#699e6d"> </td><td>Peppermint </td></tr>
// <tr><td className="mint-green" data-clipboard-text="#487d49"> </td><td>Mint green </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="poison-green" data-clipboard-text="#4db560"> </td><td>Poison green </td></tr>
// <tr><td className="vibrant-green" data-clipboard-text="#55a860"> </td><td>Vibrant green </td></tr>
// <tr><td className="kelly-green" data-clipboard-text="#339c5e"> </td><td>Kelly green </td></tr>
// <tr><td className="bright-green" data-clipboard-text="#009b5c"> </td><td>Bright green </td></tr>
// <tr><td className="fern-green" data-clipboard-text="#008c45"> </td><td>Fern green </td></tr>
// <tr><td className="jelly-bean" data-clipboard-text="#008658"> </td><td>Jelly bean </td></tr>
// <tr><td className="amazon" data-clipboard-text="#1f7349"> </td><td>Amazon </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="green-glow" data-clipboard-text="#b0c965"> </td><td>Green glow </td></tr>
// <tr><td className="bright-lime-green" data-clipboard-text="#97bc62"> </td><td>Bright lime green </td></tr>
// <tr><td className="greenery" data-clipboard-text="#88b04b"> </td><td>Greenery </td></tr>
// <tr><td className="foliage" data-clipboard-text="#75a14f"> </td><td>Foliage </td></tr>
// <tr><td className="peridot" data-clipboard-text="#819548"> </td><td>Peridot </td></tr>
// <tr><td className="meadow-green" data-clipboard-text="#739957"> </td><td>Meadow green </td></tr>
// <tr><td className="woodbine" data-clipboard-text="#7b7f32"> </td><td>Woodbine </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="jade-lime" data-clipboard-text="#a1ca7b"> </td><td>Jade lime </td></tr>
// <tr><td className="herbal-garden" data-clipboard-text="#9cad60"> </td><td>Herbal garden </td></tr>
// <tr><td className="leaf-green" data-clipboard-text="#9faf6c"> </td><td>Leaf green </td></tr>
// <tr><td className="parrot-green" data-clipboard-text="#8db051"> </td><td>Parrot green </td></tr>
// <tr><td className="dark-citron" data-clipboard-text="#a0ac4f"> </td><td>Dark citron </td></tr>
// <tr><td className="macaw-green" data-clipboard-text="#9bb53e"> </td><td>Macaw green </td></tr>
// <tr><td className="kiwi" data-clipboard-text="#7aab55"> </td><td>Kiwi </td></tr>
// </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="sharp-green" data-clipboard-text="#c6ec7a"> </td><td>Sharp green </td></tr>
// <tr><td className="daiquiri-green" data-clipboard-text="#c9d77e"> </td><td>Daiquiri green </td></tr>
// <tr><td className="wild-lime" data-clipboard-text="#c3d363"> </td><td>Wild lime </td></tr>
// <tr><td className="linden-green" data-clipboard-text="#c4bf71"> </td><td>Linden green </td></tr>
// <tr><td className="bright-chartreuse" data-clipboard-text="#b5bf50"> </td><td>Bright chartreuse </td></tr>
// <tr><td className="tender-shoots" data-clipboard-text="#b5cc39"> </td><td>Tender shoots </td></tr>
// <tr><td className="lime-punch" data-clipboard-text="#c0d725"> </td><td>Lime punch </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="sunny-lime" data-clipboard-text="#dfef87"> </td><td>Sunny lime </td></tr>
// <tr><td className="limeade" data-clipboard-text="#d3d95f"> </td><td>Limeade </td></tr>
// <tr><td className="sulphur-spring" data-clipboard-text="#d5d717"> </td><td>Sulphur spring </td></tr>
// <tr><td className="citronelle" data-clipboard-text="#b8af23"> </td><td>Citronelle </td></tr>
// <tr><td className="apple-green" data-clipboard-text="#b5b644"> </td><td>Apple green </td></tr>
// <tr><td className="warm-olive" data-clipboard-text="#c7b63c"> </td><td>Warm olive </td></tr>
// <tr><td className="antique-moss" data-clipboard-text="#b9a023"> </td><td>Antique moss </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="lime-cream" data-clipboard-text="#d7e8bc"> </td><td>Lime cream </td></tr>
// <tr><td className="shadow-lime" data-clipboard-text="#cfe09d"> </td><td>Shadow lime </td></tr>
// <tr><td className="lime-sherbet" data-clipboard-text="#cdd78a"> </td><td>Lime sherbet </td></tr>
// <tr><td className="lettuce-green" data-clipboard-text="#bed38e"> </td><td>Lettuce green </td></tr>
// <tr><td className="sap-green" data-clipboard-text="#afcb80"> </td><td>Sap green </td></tr>
// <tr><td className="opaline-green" data-clipboard-text="#a3c57d"> </td><td>Opaline green </td></tr>
// <tr><td className="winter-pear" data-clipboard-text="#b0b487"> </td><td>Winter pear </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="sylvan-green" data-clipboard-text="#e7eacb"> </td><td>Sylvan green </td></tr>
// <tr><td className="glass-green" data-clipboard-text="#ecead0"> </td><td>Glass green </td></tr>
// <tr><td className="green-essence" data-clipboard-text="#e9eac8"> </td><td>Green essence </td></tr>
// <tr><td className="ethereal-green" data-clipboard-text="#f1ecca"> </td><td>Ethereal green </td></tr>
// <tr><td className="garden-glade" data-clipboard-text="#dcd8a8"> </td><td>Garden glade </td></tr>
// <tr><td className="hay" data-clipboard-text="#d3cca3"> </td><td>Hay </td></tr>
// <tr><td className="pale-green" data-clipboard-text="#cbce91"> </td><td>Pale green </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="young-wheat" data-clipboard-text="#e1e3a9"> </td><td>Young wheat </td></tr>
// <tr><td className="citron" data-clipboard-text="#dfde9b"> </td><td>Citron </td></tr>
// <tr><td className="luminary-green" data-clipboard-text="#e3eaa5"> </td><td>Luminary green </td></tr>
// <tr><td className="pale-lime-yellow" data-clipboard-text="#dfe69f"> </td><td>Pale lime yellow </td></tr>
// <tr><td className="chardonnay" data-clipboard-text="#e7df99"> </td><td>Chardonnay </td></tr>
// <tr><td className="lima-bean" data-clipboard-text="#e1d590"> </td><td>Lima bean </td></tr>
// <tr><td className="charlock" data-clipboard-text="#e5e790"> </td><td>Charlock </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="mellow-green" data-clipboard-text="#d5d593"> </td><td>Mellow green </td></tr>
// <tr><td className="shadow-green" data-clipboard-text="#cfc486"> </td><td>Shadow green </td></tr>
// <tr><td className="celery-green" data-clipboard-text="#c5cc7b"> </td><td>Celery green </td></tr>
// <tr><td className="green-banana" data-clipboard-text="#babc72"> </td><td>Green banana </td></tr>
// <tr><td className="green-oasis" data-clipboard-text="#b0b454"> </td><td>Green oasis </td></tr>
// <tr><td className="leek-green" data-clipboard-text="#b7b17a"> </td><td>Leek green </td></tr>
// <tr><td className="weeping-willow" data-clipboard-text="#b3b17b"> </td><td>Weeping willow </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="palm" data-clipboard-text="#afaf5e"> </td><td>Palm </td></tr>
// <tr><td className="golden-olive" data-clipboard-text="#af9841"> </td><td>Golden olive </td></tr>
// <tr><td className="oasis" data-clipboard-text="#a3a04e"> </td><td>Oasis </td></tr>
// <tr><td className="moss" data-clipboard-text="#a09d59"> </td><td>Moss </td></tr>
// <tr><td className="amber-green" data-clipboard-text="#9a803a"> </td><td>Amber green </td></tr>
// <tr><td className="ecru-olive" data-clipboard-text="#927b3c"> </td><td>Ecru olive </td></tr>
// <tr><td className="green-moss" data-clipboard-text="#857946"> </td><td>Green moss </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="khaki" data-clipboard-text="#a39264"> </td><td>Khaki </td></tr>
// <tr><td className="fennel-seed" data-clipboard-text="#998456"> </td><td>Fennel seed </td></tr>
// <tr><td className="willow" data-clipboard-text="#9a8b4f"> </td><td>Willow </td></tr>
// <tr><td className="bronze-mist" data-clipboard-text="#9c7e41"> </td><td>Bronze mist </td></tr>
// <tr><td className="dried-tobacco" data-clipboard-text="#997b38"> </td><td>Dried tobacco </td></tr>
// <tr><td className="tapenade" data-clipboard-text="#805d24"> </td><td>Tapenade </td></tr>
// <tr><td className="plantation" data-clipboard-text="#7a6332"> </td><td>Plantation </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="fog-green" data-clipboard-text="#c2cbb4"> </td><td>Fog green </td></tr>
// <tr><td className="tender-greens" data-clipboard-text="#c5cfb6"> </td><td>Tender greens </td></tr>
// <tr><td className="aloe-wash" data-clipboard-text="#d0d3b7"> </td><td>Aloe wash </td></tr>
// <tr><td className="celadon-green" data-clipboard-text="#b5c1a5"> </td><td>Celadon green </td></tr>
// <tr><td className="laurel-green" data-clipboard-text="#adbba1"> </td><td>Laurel green </td></tr>
// <tr><td className="swamp" data-clipboard-text="#a8b197"> </td><td>Swamp </td></tr>
// <tr><td className="reseda" data-clipboard-text="#a1ad92"> </td><td>Reseda </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="meadow-mist" data-clipboard-text="#d3dec4"> </td><td>Meadow mist </td></tr>
// <tr><td className="butterfly" data-clipboard-text="#cadea5"> </td><td>Butterfly </td></tr>
// <tr><td className="white-jade" data-clipboard-text="#d4dbb2"> </td><td>White jade </td></tr>
// <tr><td className="seafoam-green" data-clipboard-text="#cbd5b1"> </td><td>Seafoam green </td></tr>
// <tr><td className="reed" data-clipboard-text="#c3d3a8"> </td><td>Reed </td></tr>
// <tr><td className="seedling" data-clipboard-text="#c0cba1"> </td><td>Seedling </td></tr>
// <tr><td className="foam-green" data-clipboard-text="#b4c79c"> </td><td>Foam green </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="lily-green" data-clipboard-text="#c5cf98"> </td><td>Lily green </td></tr>
// <tr><td className="beechnut" data-clipboard-text="#c2c18d"> </td><td>Beechnut </td></tr>
// <tr><td className="nile" data-clipboard-text="#b4bb85"> </td><td>Nile </td></tr>
// <tr><td className="sweet-pea" data-clipboard-text="#a3a969"> </td><td>Sweet pea </td></tr>
// <tr><td className="spinach-green" data-clipboard-text="#909b4c"> </td><td>Spinach green </td></tr>
// <tr><td className="fern" data-clipboard-text="#9aa067"> </td><td>Fern </td></tr>
// <tr><td className="green-olive" data-clipboard-text="#8d8b55"> </td><td>Green olive </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="epsom" data-clipboard-text="#849161"> </td><td>Epsom </td></tr>
// <tr><td className="grasshopper" data-clipboard-text="#77824a"> </td><td>Grasshopper </td></tr>
// <tr><td className="turtle-green" data-clipboard-text="#81894e"> </td><td>Turtle green </td></tr>
// <tr><td className="calliste-green" data-clipboard-text="#757a4e"> </td><td>Calliste green </td></tr>
// <tr><td className="calla-green" data-clipboard-text="#6a6f34"> </td><td>Calla green </td></tr>
// <tr><td className="cedar-green" data-clipboard-text="#5e6737"> </td><td>Cedar green </td></tr>
// <tr><td className="pesto" data-clipboard-text="#595f34"> </td><td>Pesto </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="tarragon" data-clipboard-text="#a4ae77"> </td><td>Tarragon </td></tr>
// <tr><td className="sage" data-clipboard-text="#91946e"> </td><td>Sage </td></tr>
// <tr><td className="iguana" data-clipboard-text="#818455"> </td><td>Iguana </td></tr>
// <tr><td className="oil-green" data-clipboard-text="#80856d"> </td><td>Oil green </td></tr>
// <tr><td className="loden-green" data-clipboard-text="#6e7153"> </td><td>Loden green </td></tr>
// <tr><td className="capulet-olive" data-clipboard-text="#656344"> </td><td>Capulet olive </td></tr>
// <tr><td className="olivine" data-clipboard-text="#666b54"> </td><td>Olivine </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="lint" data-clipboard-text="#b6ba99"> </td><td>Lint </td></tr>
// <tr><td className="pale-olive-green" data-clipboard-text="#b5ad88"> </td><td>Pale olive green </td></tr>
// <tr><td className="sage-green" data-clipboard-text="#b2ac88"> </td><td>Sage green </td></tr>
// <tr><td className="gray-green" data-clipboard-text="#a49a79"> </td><td>Gray green </td></tr>
// <tr><td className="sponge" data-clipboard-text="#a49775"> </td><td>Sponge </td></tr>
// <tr><td className="mermaid" data-clipboard-text="#817a65"> </td><td>Mermaid </td></tr>
// <tr><td className="dusky-green" data-clipboard-text="#746c57"> </td><td>Dusky green </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="tea" data-clipboard-text="#999b85"> </td><td>Tea </td></tr>
// <tr><td className="silver-sage" data-clipboard-text="#938b78"> </td><td>Silver sage </td></tr>
// <tr><td className="slate-green" data-clipboard-text="#a0987c"> </td><td>Slate green </td></tr>
// <tr><td className="elm" data-clipboard-text="#a39f86"> </td><td>Elm </td></tr>
// <tr><td className="mosstone" data-clipboard-text="#858961"> </td><td>Mosstone </td></tr>
// <tr><td className="aloe" data-clipboard-text="#817a60"> </td><td>Aloe </td></tr>
// <tr><td className="olive-drab" data-clipboard-text="#756d47"> </td><td>Olive drab </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="cedar" data-clipboard-text="#928e64"> </td><td>Cedar </td></tr>
// <tr><td className="boa" data-clipboard-text="#8e855f"> </td><td>Boa </td></tr>
// <tr><td className="dried-herb" data-clipboard-text="#847a59"> </td><td>Dried herb </td></tr>
// <tr><td className="olive-branch" data-clipboard-text="#646a45"> </td><td>Olive branch </td></tr>
// <tr><td className="lizard" data-clipboard-text="#71643e"> </td><td>Lizard </td></tr>
// <tr><td className="avocado" data-clipboard-text="#676232"> </td><td>Avocado </td></tr>
// <tr><td className="fir-green" data-clipboard-text="#67592a"> </td><td>Fir green </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="bog" data-clipboard-text="#bab696"> </td><td>Bog </td></tr>
// <tr><td className="elmwood" data-clipboard-text="#8c7c61"> </td><td>Elmwood </td></tr>
// <tr><td className="gothic-olive" data-clipboard-text="#7c6e4f"> </td><td>Gothic olive </td></tr>
// <tr><td className="butternut" data-clipboard-text="#7a643f"> </td><td>Butternut </td></tr>
// <tr><td className="nutria" data-clipboard-text="#75663e"> </td><td>Nutria </td></tr>
// <tr><td className="military-olive" data-clipboard-text="#63563b"> </td><td>Military olive </td></tr>
// <tr><td className="dark-olive" data-clipboard-text="#574d35"> </td><td>Dark olive </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="moss-gray" data-clipboard-text="#afab97"> </td><td>Moss gray </td></tr>
// <tr><td className="abbey-stone" data-clipboard-text="#aba798"> </td><td>Abbey stone </td></tr>
// <tr><td className="burnt-olive" data-clipboard-text="#646049"> </td><td>Burnt olive </td></tr>
// <tr><td className="dusty-olive" data-clipboard-text="#646356"> </td><td>Dusty olive </td></tr>
// <tr><td className="ivy-green" data-clipboard-text="#585442"> </td><td>Ivy green </td></tr>
// <tr><td className="olive-night" data-clipboard-text="#535040"> </td><td>Olive night </td></tr>
// <tr><td className="grape-leaf" data-clipboard-text="#545144"> </td><td>Grape leaf </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="porpoise" data-clipboard-text="#a7a19e"> </td><td>Porpoise </td></tr>
// <tr><td className="satellite" data-clipboard-text="#9f8d89"> </td><td>Satellite </td></tr>
// <tr><td className="driftwood" data-clipboard-text="#847a75"> </td><td>Driftwood </td></tr>
// <tr><td className="falcon" data-clipboard-text="#6d625b"> </td><td>Falcon </td></tr>
// <tr><td className="morel" data-clipboard-text="#685c53"> </td><td>Morel </td></tr>
// <tr><td className="fallen-rock" data-clipboard-text="#807669"> </td><td>Fallen rock </td></tr>
// <tr><td className="vintage-khaki" data-clipboard-text="#9a9186"> </td><td>Vintage khaki </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="crockery" data-clipboard-text="#a49887"> </td><td>Crockery </td></tr>
// <tr><td className="greige" data-clipboard-text="#928475"> </td><td>Greige </td></tr>
// <tr><td className="desert-taupe" data-clipboard-text="#8d7e71"> </td><td>Desert taupe </td></tr>
// <tr><td className="white-pepper" data-clipboard-text="#b6a893"> </td><td>White pepper </td></tr>
// <tr><td className="humus" data-clipboard-text="#b7a793"> </td><td>Humus </td></tr>
// <tr><td className="portabella" data-clipboard-text="#937b6a"> </td><td>Portabella </td></tr>
// <tr><td className="caribou" data-clipboard-text="#816d5e"> </td><td>Caribou </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="travertine" data-clipboard-text="#ae997d"> </td><td>Travertine </td></tr>
// <tr><td className="starfish" data-clipboard-text="#b09a77"> </td><td>Starfish </td></tr>
// <tr><td className="semolina" data-clipboard-text="#ceb899"> </td><td>Semolina </td></tr>
// <tr><td className="curds-and-whey" data-clipboard-text="#bca483"> </td><td>Curds & whey </td></tr>
// <tr><td className="tigers-eye" data-clipboard-text="#977c61"> </td><td>Tiger's eye </td></tr>
// <tr><td className="toasted-coconut" data-clipboard-text="#8b6a4f"> </td><td>Toasted coconut </td></tr>
// <tr><td className="rain-drum" data-clipboard-text="#5f4c40"> </td><td>Rain drum </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="pear-sorbet" data-clipboard-text="#f3eac3"> </td><td>Pear sorbet </td></tr>
// <tr><td className="pineapple-slice" data-clipboard-text="#e7d391"> </td><td>Pineapple slice </td></tr>
// <tr><td className="yarrow" data-clipboard-text="#face6d"> </td><td>Yarrow </td></tr>
// <tr><td className="anise-flower" data-clipboard-text="#f4e3b5"> </td><td>Anise flower </td></tr>
// <tr><td className="flan" data-clipboard-text="#f6e3b4"> </td><td>Flan </td></tr>
// <tr><td className="sundress" data-clipboard-text="#ebcf89"> </td><td>Sundress </td></tr>
// <tr><td className="macadamia" data-clipboard-text="#e4cfb6"> </td><td>Macadamia </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="lemon-meringue" data-clipboard-text="#f6e199"> </td><td>Lemon meringue </td></tr>
// <tr><td className="yellow-iris" data-clipboard-text="#eee78e"> </td><td>Yellow iris </td></tr>
// <tr><td className="goldfinch" data-clipboard-text="#f8dc6c"> </td><td>Goldfinch </td></tr>
// <tr><td className="lemon-zest" data-clipboard-text="#f9d857"> </td><td>Lemon zest </td></tr>
// <tr><td className="solar-power" data-clipboard-text="#f4bf3a"> </td><td>Solar power </td></tr>
// <tr><td className="samoan-sun" data-clipboard-text="#fbc85f"> </td><td>Samoan sun </td></tr>
// <tr><td className="desert-sun" data-clipboard-text="#c87629"> </td><td>Desert sun </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="pumpkin-spice" data-clipboard-text="#a05c17"> </td><td>Pumpkin spice </td></tr>
// <tr><td className="orange-pepper" data-clipboard-text="#df7500"> </td><td>Orange pepper </td></tr>
// <tr><td className="marmalade" data-clipboard-text="#c16512"> </td><td>Marmalade </td></tr>
// <tr><td className="hawaiian-sunset" data-clipboard-text="#bb5c14"> </td><td>Hawaiian sunset </td></tr>
// <tr><td className="autumnal" data-clipboard-text="#a15325"> </td><td>Autumnal </td></tr>
// <tr><td className="umber" data-clipboard-text="#944a1f"> </td><td>Umber </td></tr>
// <tr><td className="exuberance" data-clipboard-text="#e86800"> </td><td>Exuberance </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="puffins-bill" data-clipboard-text="#e95c20"> </td><td>Puffin's bill </td></tr>
// <tr><td className="caramel-cafe" data-clipboard-text="#864c24"> </td><td>Caramel cafe </td></tr>
// <tr><td className="gold-flame" data-clipboard-text="#b45422"> </td><td>Gold flame </td></tr>
// <tr><td className="cinnamon-stick" data-clipboard-text="#9b4722"> </td><td>Cinnamon stick </td></tr>
// <tr><td className="potters-clay" data-clipboard-text="#9e4624"> </td><td>Potter's clay </td></tr>
// <tr><td className="rooibos-tea" data-clipboard-text="#a23c26"> </td><td>Rooibos tea </td></tr>
// <tr><td className="celosia-orange" data-clipboard-text="#e8703a"> </td><td>Celosia orange </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="orangeade" data-clipboard-text="#e2552c"> </td><td>Orangeade </td></tr>
// <tr><td className="pureed-pumpkin" data-clipboard-text="#c34121"> </td><td>Pureed pumpkin </td></tr>
// <tr><td className="tangerine-tango" data-clipboard-text="#dd4124"> </td><td>Tangerine tango </td></tr>
// <tr><td className="poinciana" data-clipboard-text="#ca3422"> </td><td>Poinciana </td></tr>
// <tr><td className="koi" data-clipboard-text="#d15837"> </td><td>Koi </td></tr>
// <tr><td className="samba" data-clipboard-text="#a2242f"> </td><td>Samba </td></tr>
// <tr><td className="barbados-cherry" data-clipboard-text="#aa0a27"> </td><td>Barbados cherry </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="haute-red" data-clipboard-text="#a11729"> </td><td>Haute red </td></tr>
// <tr><td className="salsa" data-clipboard-text="#aa182b"> </td><td>Salsa </td></tr>
// <tr><td className="scarlet-sage" data-clipboard-text="#9d202f"> </td><td>Scarlet sage </td></tr>
// <tr><td className="scooter" data-clipboard-text="#941e32"> </td><td>Scooter </td></tr>
// <tr><td className="red-dahlia" data-clipboard-text="#7d2027"> </td><td>Red dahlia </td></tr>
// <tr><td className="sun-dried-tomato" data-clipboard-text="#752329"> </td><td>Sun-dried tomato </td></tr>
// <tr><td className="fired-brick" data-clipboard-text="#6a2e2a"> </td><td>Fired brick </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="rhubarb" data-clipboard-text="#77202f"> </td><td>Rhubarb </td></tr>
// <tr><td className="syrah" data-clipboard-text="#6a282c"> </td><td>Syrah </td></tr>
// <tr><td className="pomegranate" data-clipboard-text="#6c2831"> </td><td>Pomegranate </td></tr>
// <tr><td className="cabernet" data-clipboard-text="#64242e"> </td><td>Cabernet </td></tr>
// <tr><td className="ballerina" data-clipboard-text="#f2cfdc"> </td><td>Ballerina </td></tr>
// <tr><td className="fairy-tale" data-clipboard-text="#f2c1d1"> </td><td>Fairy tale </td></tr>
// <tr><td className="etherea" data-clipboard-text="#a5958f"> </td><td>Etherea </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="foxglove" data-clipboard-text="#b98391"> </td><td>Foxglove </td></tr>
// <tr><td className="mesa-rose" data-clipboard-text="#a66e7a"> </td><td>Mesa rose </td></tr>
// <tr><td className="jazzy" data-clipboard-text="#b61c50"> </td><td>Jazzy </td></tr>
// <tr><td className="granita" data-clipboard-text="#a52350"> </td><td>Granita </td></tr>
// <tr><td className="cherries-jubilee" data-clipboard-text="#a22452"> </td><td>Cherries jubilee </td></tr>
// <tr><td className="cabaret" data-clipboard-text="#cb3373"> </td><td>Cabaret </td></tr>
// <tr><td className="vivacious" data-clipboard-text="#a32857"> </td><td>Vivacious </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="bellflower" data-clipboard-text="#9469a2"> </td><td>Bellflower </td></tr>
// <tr><td className="english-lavendar" data-clipboard-text="#9d7bb0"> </td><td>English lavendar </td></tr>
// <tr><td className="rhapsody" data-clipboard-text="#9f86aa"> </td><td>Rhapsody </td></tr>
// <tr><td className="acai" data-clipboard-text="#46295a"> </td><td>Acai </td></tr>
// <tr><td className="tillandsia-purple" data-clipboard-text="#563474"> </td><td>Tillandsia purple </td></tr>
// <tr><td className="picasso-lily" data-clipboard-text="#634878"> </td><td>Picasso lily </td></tr>
// <tr><td className="mystical" data-clipboard-text="#5f4e72"> </td><td>Mystical </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="icelandic-blue" data-clipboard-text="#a9adc2"> </td><td>Icelandic blue </td></tr>
// <tr><td className="aleutian" data-clipboard-text="#9a9eb3"> </td><td>Aleutian </td></tr>
// <tr><td className="silver-bullet" data-clipboard-text="#81839a"> </td><td>Silver bullet </td></tr>
// <tr><td className="blue-granite" data-clipboard-text="#717388"> </td><td>Blue granite </td></tr>
// <tr><td className="evening-blue" data-clipboard-text="#2a293e"> </td><td>Evening blue </td></tr>
// <tr><td className="deep-well" data-clipboard-text="#2c2a33"> </td><td>Deep well </td></tr>
// <tr><td className="night-sky" data-clipboard-text="#2a2a35"> </td><td>Night sky </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="blue-heron" data-clipboard-text="#96a3c7"> </td><td>Blue heron </td></tr>
// <tr><td className="hydrangea" data-clipboard-text="#849bcc"> </td><td>Hydrangea </td></tr>
// <tr><td className="xenon-blue" data-clipboard-text="#b7c0d7"> </td><td>Xenon blue </td></tr>
// <tr><td className="brunnera-blue" data-clipboard-text="#9ba9ca"> </td><td>Brunnera blue </td></tr>
// <tr><td className="sky-captain" data-clipboard-text="#262934"> </td><td>Sky captain </td></tr>
// <tr><td className="navy-blazer" data-clipboard-text="#282d3c"> </td><td>Navy blazer </td></tr>
// <tr><td className="dark-sapphire" data-clipboard-text="#262b37"> </td><td>Dark sapphire </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="plein-air" data-clipboard-text="#bfcad6"> </td><td>Plein air </td></tr>
// <tr><td className="halogen-blue" data-clipboard-text="#bdc6dc"> </td><td>Halogen blue </td></tr>
// <tr><td className="chambray-blue" data-clipboard-text="#9eb4d3"> </td><td>Chambray blue </td></tr>
// <tr><td className="bel-air-blue" data-clipboard-text="#819ac1"> </td><td>Bel air blue </td></tr>
// <tr><td className="vintage-indigo" data-clipboard-text="#4a556b"> </td><td>Vintage indigo </td></tr>
// <tr><td className="sodalite-blue" data-clipboard-text="#253668"> </td><td>Sodalite blue </td></tr>
// <tr><td className="parisian-night" data-clipboard-text="#323441"> </td><td>Parisian night </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="monaco-blue" data-clipboard-text="#274374"> </td><td>Monaco blue </td></tr>
// <tr><td className="vallarta-blue" data-clipboard-text="#30658e"> </td><td>Vallarta blue </td></tr>
// <tr><td className="salute" data-clipboard-text="#282b34"> </td><td>Salute </td></tr>
// <tr><td className="outer-space" data-clipboard-text="#2f3441"> </td><td>Outer space </td></tr>
// <tr><td className="blueberry" data-clipboard-text="#2c333e"> </td><td>Blueberry </td></tr>
// <tr><td className="carbon" data-clipboard-text="#272f38"> </td><td>Carbon </td></tr>
// <tr><td className="vulcan" data-clipboard-text="#2d3036"> </td><td>Vulcan </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="omphalodes" data-clipboard-text="#b5cedf"> </td><td>Omphalodes </td></tr>
// <tr><td className="cool-blue" data-clipboard-text="#a5c5d9"> </td><td>Cool blue </td></tr>
// <tr><td className="bering-sea" data-clipboard-text="#4b5b6e"> </td><td>Bering sea </td></tr>
// <tr><td className="blue-wing-teal" data-clipboard-text="#2c4053"> </td><td>Blue wing teal </td></tr>
// <tr><td className="poseidon" data-clipboard-text="#123955"> </td><td>Poseidon </td></tr>
// <tr><td className="mykonos-blue" data-clipboard-text="#005780"> </td><td>Mykonos blue </td></tr>
// <tr><td className="reflecting-pond" data-clipboard-text="#203e4a"> </td><td>Reflecting pond </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="corydalis-blue" data-clipboard-text="#a9cada"> </td><td>Corydalis blue </td></tr>
// <tr><td className="blue-topaz" data-clipboard-text="#78bdd4"> </td><td>Blue topaz </td></tr>
// <tr><td className="gulf-stream" data-clipboard-text="#88c3d0"> </td><td>Gulf stream </td></tr>
// <tr><td className="aquarelle" data-clipboard-text="#61aab1"> </td><td>Aquarelle </td></tr>
// <tr><td className="aqua-splash" data-clipboard-text="#85ced1"> </td><td>Aqua splash </td></tr>
// <tr><td className="botanical-garden" data-clipboard-text="#12403c"> </td><td>Botanical garden </td></tr>
// <tr><td className="scarab" data-clipboard-text="#23312d"> </td><td>Scarab </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="nimbus-cloud" data-clipboard-text="#d5d5d8"> </td><td>Nimbus cloud </td></tr>
// <tr><td className="micro-chip" data-clipboard-text="#babcc0"> </td><td>Micro chip </td></tr>
// <tr><td className="wet-weather" data-clipboard-text="#929090"> </td><td>Wet weather </td></tr>
// <tr><td className="titanium" data-clipboard-text="#807d7f"> </td><td>Titanium </td></tr>
// <tr><td className="december-sky" data-clipboard-text="#767275"> </td><td>December sky </td></tr>
// <tr><td className="pavement" data-clipboard-text="#524d50"> </td><td>Pavement </td></tr>
// <tr><td className="magnet" data-clipboard-text="#4d4b4f"> </td><td>Magnet </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="silver-sconce" data-clipboard-text="#a19fa5"> </td><td>Silver sconce </td></tr>
// <tr><td className="silver-filigree" data-clipboard-text="#7f7c81"> </td><td>Silver filigree </td></tr>
// <tr><td className="quicksilver" data-clipboard-text="#7e7d88"> </td><td>Quicksilver </td></tr>
// <tr><td className="storm-front" data-clipboard-text="#787376"> </td><td>Storm front </td></tr>
// <tr><td className="tornado" data-clipboard-text="#5e5b60"> </td><td>Tornado </td></tr>
// <tr><td className="eiffel-tower" data-clipboard-text="#5c5658"> </td><td>Eiffel tower </td></tr>
// <tr><td className="graphite" data-clipboard-text="#3b3b48"> </td><td>Graphite </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="alloy" data-clipboard-text="#98979a"> </td><td>Alloy </td></tr>
// <tr><td className="sleet" data-clipboard-text="#92949b"> </td><td>Sleet </td></tr>
// <tr><td className="tradewinds" data-clipboard-text="#7f8793"> </td><td>Tradewinds </td></tr>
// <tr><td className="grisaille" data-clipboard-text="#585e6f"> </td><td>Grisaille </td></tr>
// <tr><td className="periscope" data-clipboard-text="#46444c"> </td><td>Periscope </td></tr>
// <tr><td className="quiet-shade" data-clipboard-text="#66676d"> </td><td>Quiet shade </td></tr>
// <tr><td className="turbulence" data-clipboard-text="#4e545b"> </td><td>Turbulence </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="stormy-weather" data-clipboard-text="#58646d"> </td><td>Stormy weather </td></tr>
// <tr><td className="iron-gate" data-clipboard-text="#4e5055"> </td><td>Iron gate </td></tr>
// <tr><td className="forged-iron" data-clipboard-text="#48464a"> </td><td>Forged iron </td></tr>
// <tr><td className="asphalt" data-clipboard-text="#434447"> </td><td>Asphalt </td></tr>
// <tr><td className="ghost-gray" data-clipboard-text="#9c9b98"> </td><td>Ghost gray </td></tr>
// <tr><td className="brushed-nickel" data-clipboard-text="#73706f"> </td><td>Brushed nickel </td></tr>
// <tr><td className="mourning-dove" data-clipboard-text="#94908b"> </td><td>Mourning dove </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="belgian-block" data-clipboard-text="#a3a9a6"> </td><td>Belgian block </td></tr>
// <tr><td className="agave-green" data-clipboard-text="#6b7169"> </td><td>Agave green </td></tr>
// <tr><td className="cilantro" data-clipboard-text="#43544b"> </td><td>Cilantro </td></tr>
// <tr><td className="pine-grove" data-clipboard-text="#213631"> </td><td>Pine grove </td></tr>
// <tr><td className="eden" data-clipboard-text="#264e36"> </td><td>Eden </td></tr>
// <tr><td className="jolly-green" data-clipboard-text="#007844"> </td><td>Jolly green </td></tr>
// <tr><td className="mountain-view" data-clipboard-text="#2e3d30"> </td><td>Mountain view </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="margarita" data-clipboard-text="#b5c38e"> </td><td>Margarita </td></tr>
// <tr><td className="winter-moss" data-clipboard-text="#5b5a41"> </td><td>Winter moss </td></tr>
// <tr><td className="climbing-ivy" data-clipboard-text="#444940"> </td><td>Climbing ivy </td></tr>
// <tr><td className="delicioso" data-clipboard-text="#3f352f"> </td><td>Delicioso </td></tr>
// <tr><td className="mulch" data-clipboard-text="#433937"> </td><td>Mulch </td></tr>
// <tr><td className="mole" data-clipboard-text="#392d2b"> </td><td>Mole </td></tr>
// <tr><td className="chocolate-torte" data-clipboard-text="#382e2d"> </td><td>Chocolate torte </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="ganache" data-clipboard-text="#34292a"> </td><td>Ganache </td></tr>
// <tr><td className="black-bean" data-clipboard-text="#2e272a"> </td><td>Black bean </td></tr>
// <tr><td className="espresso" data-clipboard-text="#363031"> </td><td>Espresso </td></tr>
// <tr><td className="meteorite" data-clipboard-text="#2b2929"> </td><td>Meteorite </td></tr>
// <tr><td className="tap-shoe" data-clipboard-text="#2a2b2d"> </td><td>Tap shoe </td></tr>
// <tr><td className="white-alyssum" data-clipboard-text="#efebe7"> </td><td>White alyssum </td></tr>
// <tr><td className="jet-stream" data-clipboard-text="#ede6de"> </td><td>Jet stream </td></tr>

//       </table>
//     </div>
//   </div>
//   <h5>New Colors 2016</h5>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="sweet-cream" data-clipboard-text="#f0ead6"> </td><td>Sweet cream </td></tr>
// <tr><td className="buttercream" data-clipboard-text="#efe0cd"> </td><td>Buttercream </td></tr>
// <tr><td className="lemon-icing" data-clipboard-text="#f6ebc8"> </td><td>Lemon icing </td></tr>
// <tr><td className="sugar-swizzle" data-clipboard-text="#f3eee7"> </td><td>Sugar swizzle </td></tr>
// <tr><td className="coconut-milk" data-clipboard-text="#f0ede5"> </td><td>Coconut milk </td></tr>
// <tr><td className="yellow-pear" data-clipboard-text="#ece99b"> </td><td>Yellow pear </td></tr>
// <tr><td className="sea-salt" data-clipboard-text="#f1e6de"> </td><td>Sea salt </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="brilliant-white" data-clipboard-text="#edf1fe"> </td><td>Brilliant white </td></tr>
// <tr><td className="cannoli-cream" data-clipboard-text="#f0efe2"> </td><td>Cannoli cream </td></tr>
// <tr><td className="tofu" data-clipboard-text="#e8e3d9"> </td><td>Tofu </td></tr>
// <tr><td className="pistachio-shell" data-clipboard-text="#d7cfbb"> </td><td>Pistachio shell </td></tr>
// <tr><td className="celandine" data-clipboard-text="#ebdf67"> </td><td>Celandine </td></tr>
// <tr><td className="lemon-verbena" data-clipboard-text="#f3e779"> </td><td>Lemon verbena </td></tr>
// <tr><td className="creme-de-peche" data-clipboard-text="#f5d6c6"> </td><td>Creme de peche </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="marys-rose" data-clipboard-text="#f7d1d4"> </td><td>Mary's rose </td></tr>
// <tr><td className="morganite" data-clipboard-text="#dfcdc6"> </td><td>Morganite </td></tr>
// <tr><td className="rose-water" data-clipboard-text="#f8e0e7"> </td><td>Rose water </td></tr>
// <tr><td className="almond-milk" data-clipboard-text="#d6cebe"> </td><td>Almond milk </td></tr>
// <tr><td className="lime-popsicle" data-clipboard-text="#c0db3a"> </td><td>Lime popsicle </td></tr>
// <tr><td className="golden-kiwi" data-clipboard-text="#f3dd3e"> </td><td>Golden kiwi </td></tr>
// <tr><td className="meadowlark" data-clipboard-text="#ead94e"> </td><td>Meadowlark </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="evening-primrose" data-clipboard-text="#ccdb1e"> </td><td>Evening primrose </td></tr>
// <tr><td className="habanero-gold" data-clipboard-text="#fed450"> </td><td>Habanero gold </td></tr>
// <tr><td className="minion-yellow" data-clipboard-text="#fed55d"> </td><td>Minion yellow </td></tr>
// <tr><td className="soybean" data-clipboard-text="#d2c29d"> </td><td>Soybean </td></tr>
// <tr><td className="jurassic-gold" data-clipboard-text="#e7aa56"> </td><td>Jurassic gold </td></tr>
// <tr><td className="brown-rice" data-clipboard-text="#c7bba4"> </td><td>Brown rice </td></tr>
// <tr><td className="peach-quartz" data-clipboard-text="#f5b895"> </td><td>Peach quartz </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="peachy-keen" data-clipboard-text="#e2bdb3"> </td><td>Peachy keen </td></tr>
// <tr><td className="brazilian-sand" data-clipboard-text="#dacab7"> </td><td>Brazilian sand </td></tr>
// <tr><td className="pink-salt" data-clipboard-text="#f7cdc7"> </td><td>Pink salt </td></tr>
// <tr><td className="rose-quartz" data-clipboard-text="#f7cac9"> </td><td>Rose quartz </td></tr>
// <tr><td className="ballet-slipper" data-clipboard-text="#ebced5"> </td><td>Ballet slipper </td></tr>
// <tr><td className="cherry-blossom" data-clipboard-text="#f7cee0"> </td><td>Cherry blossom </td></tr>
// <tr><td className="antarctica" data-clipboard-text="#c6c5c6"> </td><td>Antarctica </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="oyster-mushroom" data-clipboard-text="#c3c6c8"> </td><td>Oyster mushroom </td></tr>
// <tr><td className="tanager-turquoise" data-clipboard-text="#91dce8"> </td><td>Tanager turquoise </td></tr>
// <tr><td className="limpet-shell" data-clipboard-text="#98ddde"> </td><td>Limpet shell </td></tr>
// <tr><td className="iced-aqua" data-clipboard-text="#abd3db"> </td><td>Iced aqua </td></tr>
// <tr><td className="acid-lime" data-clipboard-text="#badf30"> </td><td>Acid lime </td></tr>
// <tr><td className="spicy-mustard" data-clipboard-text="#d8ae47"> </td><td>Spicy mustard </td></tr>
// <tr><td className="kumquat" data-clipboard-text="#fbaa4c"> </td><td>Kumquat </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="irish-cream" data-clipboard-text="#c0ac92"> </td><td>Irish cream </td></tr>
// <tr><td className="orange-chiffon" data-clipboard-text="#f9aa7d"> </td><td>Orange chiffon </td></tr>
// <tr><td className="hazelnut" data-clipboard-text="#cfb095"> </td><td>Hazelnut </td></tr>
// <tr><td className="sepia-rose" data-clipboard-text="#d4bab6"> </td><td>Sepia rose </td></tr>
// <tr><td className="raindrops" data-clipboard-text="#b1aab3"> </td><td>Raindrops </td></tr>
// <tr><td className="zen-blue" data-clipboard-text="#9fa9be"> </td><td>Zen blue </td></tr>
// <tr><td className="quiet-gray" data-clipboard-text="#b9babd"> </td><td>Quiet gray </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="airy-blue" data-clipboard-text="#92b6d5"> </td><td>Airy blue </td></tr>
// <tr><td className="harbor-mist" data-clipboard-text="#afb1b4"> </td><td>Harbor mist </td></tr>
// <tr><td className="sea-angel" data-clipboard-text="#98bfca"> </td><td>Sea angel </td></tr>
// <tr><td className="baltic-sea" data-clipboard-text="#79b5db"> </td><td>Baltic sea </td></tr>
// <tr><td className="antiqua-sand" data-clipboard-text="#83c2cd"> </td><td>Antiqua sand </td></tr>
// <tr><td className="island-paradise" data-clipboard-text="#95dee3"> </td><td>Island paradise </td></tr>
// <tr><td className="tibetan-stone" data-clipboard-text="#82c2c7"> </td><td>Tibetan stone </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="mango-mojito" data-clipboard-text="#d69c2f"> </td><td>Mango mojito </td></tr>
// <tr><td className="ginger-root" data-clipboard-text="#bfa58a"> </td><td>Ginger root </td></tr>
// <tr><td className="iced-coffee" data-clipboard-text="#b18f6a"> </td><td>Iced coffee </td></tr>
// <tr><td className="autumn-blaze" data-clipboard-text="#d9922e"> </td><td>Autumn blaze </td></tr>
// <tr><td className="golden-orange" data-clipboard-text="#d7942d"> </td><td>Golden orange </td></tr>
// <tr><td className="porcini" data-clipboard-text="#cca580"> </td><td>Porcini </td></tr>
// <tr><td className="iceland-poppy" data-clipboard-text="#f4963a"> </td><td>Iceland poppy </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="papaya" data-clipboard-text="#fea166"> </td><td>Papaya </td></tr>
// <tr><td className="carrot-curl" data-clipboard-text="#fe8c18"> </td><td>Carrot curl </td></tr>
// <tr><td className="turmeric" data-clipboard-text="#fe840e"> </td><td>Turmeric </td></tr>
// <tr><td className="tangelo" data-clipboard-text="#fe7e03"> </td><td>Tangelo </td></tr>
// <tr><td className="fenugreek" data-clipboard-text="#c0916c"> </td><td>Fenugreek </td></tr>
// <tr><td className="dusted-clay" data-clipboard-text="#cc7357"> </td><td>Dusted clay </td></tr>
// <tr><td className="pastry-shell" data-clipboard-text="#bd8c66"> </td><td>Pastry shell </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="blooming-dahlia" data-clipboard-text="#eb9687"> </td><td>Blooming dahlia </td></tr>
// <tr><td className="crocus-petal" data-clipboard-text="#b99bc5"> </td><td>Crocus petal </td></tr>
// <tr><td className="purple-rose" data-clipboard-text="#b09fca"> </td><td>Purple rose </td></tr>
// <tr><td className="lilac-breeze" data-clipboard-text="#b3a0c9"> </td><td>Lilac breeze </td></tr>
// <tr><td className="serenity" data-clipboard-text="#91a8d0"> </td><td>Serenity </td></tr>
// <tr><td className="crystal-seas" data-clipboard-text="#5dafce"> </td><td>Crystal seas </td></tr>
// <tr><td className="golden-lime" data-clipboard-text="#9a9738"> </td><td>Golden lime </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="split-pea" data-clipboard-text="#9c9a40"> </td><td>Split pea </td></tr>
// <tr><td className="lentil-sprout" data-clipboard-text="#aba44d"> </td><td>Lentil sprout </td></tr>
// <tr><td className="pure-cashmere" data-clipboard-text="#ada396"> </td><td>Pure cashmere </td></tr>
// <tr><td className="sun-baked" data-clipboard-text="#d27f63"> </td><td>Sun baked </td></tr>
// <tr><td className="peach-caramel" data-clipboard-text="#c5733d"> </td><td>Peach caramel </td></tr>
// <tr><td className="tomato-cream" data-clipboard-text="#c57644"> </td><td>Tomato cream </td></tr>
// <tr><td className="orange-tiger" data-clipboard-text="#f96714"> </td><td>Orange tiger </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="meerkat" data-clipboard-text="#a46f44"> </td><td>Meerkat </td></tr>
// <tr><td className="exotic-orange" data-clipboard-text="#f96531"> </td><td>Exotic orange </td></tr>
// <tr><td className="dragon-fire" data-clipboard-text="#fc642d"> </td><td>Dragon fire </td></tr>
// <tr><td className="coral-quartz" data-clipboard-text="#f77464"> </td><td>Coral quartz </td></tr>
// <tr><td className="peach-echo" data-clipboard-text="#f7786b"> </td><td>Peach echo </td></tr>
// <tr><td className="purple-dove" data-clipboard-text="#98878c"> </td><td>Purple dove </td></tr>
// <tr><td className="sand-verbena" data-clipboard-text="#9f90c1"> </td><td>Sand verbena </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="lilac-gray" data-clipboard-text="#9896a4"> </td><td>Lilac gray </td></tr>
// <tr><td className="granada-sky" data-clipboard-text="#5d81bb"> </td><td>Granada sky </td></tr>
// <tr><td className="tree-house" data-clipboard-text="#988c75"> </td><td>Tree house </td></tr>
// <tr><td className="chai-tea" data-clipboard-text="#b1832f"> </td><td>Chai tea </td></tr>
// <tr><td className="roasted-pecan" data-clipboard-text="#93592b"> </td><td>Roasted pecan </td></tr>
// <tr><td className="roasted-cashew" data-clipboard-text="#918579"> </td><td>Roasted cashew </td></tr>
// <tr><td className="winter-twig" data-clipboard-text="#948a7a"> </td><td>Winter twig </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="petrified-oak" data-clipboard-text="#8d7960"> </td><td>Petrified oak </td></tr>
// <tr><td className="argan-oil" data-clipboard-text="#8b593e"> </td><td>Argan oil </td></tr>
// <tr><td className="autumn-maple" data-clipboard-text="#c46215"> </td><td>Autumn maple </td></tr>
// <tr><td className="sepia-tint" data-clipboard-text="#897560"> </td><td>Sepia tint </td></tr>
// <tr><td className="spice-route" data-clipboard-text="#b95b3f"> </td><td>Spice route </td></tr>
// <tr><td className="scarlet-ibis" data-clipboard-text="#f45520"> </td><td>Scarlet ibis </td></tr>
// <tr><td className="summer-fig" data-clipboard-text="#be4b3b"> </td><td>Summer fig </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="moonscape" data-clipboard-text="#725f69"> </td><td>Moonscape </td></tr>
// <tr><td className="fruit-dove" data-clipboard-text="#ce5b78"> </td><td>Fruit dove </td></tr>
// <tr><td className="pink-yarrow" data-clipboard-text="#ce3175"> </td><td>Pink yarrow </td></tr>
// <tr><td className="toadstool" data-clipboard-text="#988088"> </td><td>Toadstool </td></tr>
// <tr><td className="bodacious" data-clipboard-text="#b76ba3"> </td><td>Bodacious </td></tr>
// <tr><td className="diffused-orchid" data-clipboard-text="#9879a2"> </td><td>Diffused orchid </td></tr>
// <tr><td className="fairy-wren" data-clipboard-text="#9479af"> </td><td>Fairy wren </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="sunlit-allium" data-clipboard-text="#9787bb"> </td><td>Sunlit allium </td></tr>
// <tr><td className="sharkskin" data-clipboard-text="#838487"> </td><td>Sharkskin </td></tr>
// <tr><td className="pale-iris" data-clipboard-text="#8895c5"> </td><td>Pale iris </td></tr>
// <tr><td className="iolite" data-clipboard-text="#707bb4"> </td><td>Iolite </td></tr>
// <tr><td className="gray-flannel" data-clipboard-text="#848182"> </td><td>Gray flannel </td></tr>
// <tr><td className="riverside" data-clipboard-text="#4c6a92"> </td><td>Riverside </td></tr>
// <tr><td className="quiet-harbor" data-clipboard-text="#5a789a"> </td><td>Quiet harbor </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="lichen-blue" data-clipboard-text="#5d89b3"> </td><td>Lichen blue </td></tr>
// <tr><td className="pacific-coast" data-clipboard-text="#5480ac"> </td><td>Pacific coast </td></tr>
// <tr><td className="ibiza-blue" data-clipboard-text="#007cb7"> </td><td>Ibiza blue </td></tr>
// <tr><td className="navagio-bay" data-clipboard-text="#3183a0"> </td><td>Navagio bay </td></tr>
// <tr><td className="barrier-reef" data-clipboard-text="#0084a1"> </td><td>Barrier reef </td></tr>
// <tr><td className="guacamole" data-clipboard-text="#797b3a"> </td><td>Guacamole </td></tr>
// <tr><td className="kale" data-clipboard-text="#5a7247"> </td><td>Kale </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="mayfly" data-clipboard-text="#65663f"> </td><td>Mayfly </td></tr>
// <tr><td className="twist-of-lime" data-clipboard-text="#4e632c"> </td><td>Twist of lime </td></tr>
// <tr><td className="martini-olive" data-clipboard-text="#716a4d"> </td><td>Martini olive </td></tr>
// <tr><td className="emperador" data-clipboard-text="#684832"> </td><td>Emperador </td></tr>
// <tr><td className="thai-curry" data-clipboard-text="#ab6819"> </td><td>Thai curry </td></tr>
// <tr><td className="honey-ginger" data-clipboard-text="#a86217"> </td><td>Honey ginger </td></tr>
// <tr><td className="sugar-almond" data-clipboard-text="#935529"> </td><td>Sugar almond </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="spiced-apple" data-clipboard-text="#783937"> </td><td>Spiced apple </td></tr>
// <tr><td className="chili-oil" data-clipboard-text="#8e3c36"> </td><td>Chili oil </td></tr>
// <tr><td className="plum-truffle" data-clipboard-text="#675657"> </td><td>Plum truffle </td></tr>
// <tr><td className="brandy-brown" data-clipboard-text="#73362a"> </td><td>Brandy brown </td></tr>
// <tr><td className="valiant-poppy" data-clipboard-text="#bc322c"> </td><td>Valiant poppy </td></tr>
// <tr><td className="aura-orange" data-clipboard-text="#b4262a"> </td><td>Aura orange </td></tr>
// <tr><td className="toreador" data-clipboard-text="#b61032"> </td><td>Toreador </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="lychee" data-clipboard-text="#ba0b32"> </td><td>Lychee </td></tr>
// <tr><td className="goji-berry" data-clipboard-text="#b91228"> </td><td>Goji berry </td></tr>
// <tr><td className="arctic-dusk" data-clipboard-text="#735b6a"> </td><td>Arctic dusk </td></tr>
// <tr><td className="ephemera" data-clipboard-text="#6f5965"> </td><td>Ephemera </td></tr>
// <tr><td className="jalapeno-red" data-clipboard-text="#b2103c"> </td><td>Jalapeno red </td></tr>
// <tr><td className="love-potion" data-clipboard-text="#c01352"> </td><td>Love potion </td></tr>
// <tr><td className="pink-peacock" data-clipboard-text="#c62168"> </td><td>Pink peacock </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="grape-kiss" data-clipboard-text="#7b4368"> </td><td>Grape kiss </td></tr>
// <tr><td className="willowherb" data-clipboard-text="#8e4483"> </td><td>Willowherb </td></tr>
// <tr><td className="charisma" data-clipboard-text="#632a60"> </td><td>Charisma </td></tr>
// <tr><td className="plum-jam" data-clipboard-text="#624076"> </td><td>Plum jam </td></tr>
// <tr><td className="lavender-crystal" data-clipboard-text="#936a98"> </td><td>Lavender crystal </td></tr>
// <tr><td className="purple-sapphire" data-clipboard-text="#6f4685"> </td><td>Purple sapphire </td></tr>
// <tr><td className="chive-blossom" data-clipboard-text="#7d5d99"> </td><td>Chive blossom </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="purple-corallite" data-clipboard-text="#5a4e8f"> </td><td>Purple corallite </td></tr>
// <tr><td className="volcanic-glass" data-clipboard-text="#615c60"> </td><td>Volcanic glass </td></tr>
// <tr><td className="gray-blue" data-clipboard-text="#4d587a"> </td><td>Gray blue </td></tr>
// <tr><td className="blue-horizon" data-clipboard-text="#4e6482"> </td><td>Blue horizon </td></tr>
// <tr><td className="iris-bloom" data-clipboard-text="#5b609e"> </td><td>Iris bloom </td></tr>
// <tr><td className="nebulas-blue" data-clipboard-text="#2d62a3"> </td><td>Nebulas blue </td></tr>
// <tr><td className="indigo-bunting" data-clipboard-text="#006ca9"> </td><td>Indigo bunting </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="fjord-blue" data-clipboard-text="#007290"> </td><td>Fjord blue </td></tr>
// <tr><td className="hawaiian-surf" data-clipboard-text="#0078a7"> </td><td>Hawaiian surf </td></tr>
// <tr><td className="tahitian-tide" data-clipboard-text="#006b7e"> </td><td>Tahitian tide </td></tr>
// <tr><td className="quetzal-green" data-clipboard-text="#006865"> </td><td>Quetzal green </td></tr>
// <tr><td className="granite-gray" data-clipboard-text="#615e5f"> </td><td>Granite gray </td></tr>
// <tr><td className="lush-meadow" data-clipboard-text="#006e51"> </td><td>Lush meadow </td></tr>
// <tr><td className="gray-pinstripe" data-clipboard-text="#49494d"> </td><td>Gray pinstripe </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3">
//       <table>
//         <tr><td className="sea-turtle" data-clipboard-text="#5e5749"> </td><td>Sea turtle </td></tr>
// <tr><td className="deep-depths" data-clipboard-text="#46483c"> </td><td>Deep depths </td></tr>
// <tr><td className="kalamata" data-clipboard-text="#5f5b4c"> </td><td>Kalamata </td></tr>
// <tr><td className="crocodile" data-clipboard-text="#5d5348"> </td><td>Crocodile </td></tr>
// <tr><td className="chocolate-plum" data-clipboard-text="#3c2d2e"> </td><td>Chocolate plum </td></tr>
// <tr><td className="chocolate-lab" data-clipboard-text="#5c3e35"> </td><td>Chocolate lab </td></tr>
// <tr><td className="shaved-chocolate" data-clipboard-text="#543b35"> </td><td>Shaved chocolate </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="fondue-fudge" data-clipboard-text="#5d4236"> </td><td>Fondue fudge </td></tr>
// <tr><td className="tiramisu" data-clipboard-text="#634235"> </td><td>Tiramisu </td></tr>
// <tr><td className="rocky-road" data-clipboard-text="#5a3e36"> </td><td>Rocky road </td></tr>
// <tr><td className="chicory-coffee" data-clipboard-text="#4a342e"> </td><td>Chicory coffee </td></tr>
// <tr><td className="smoked-paprika" data-clipboard-text="#6e362c"> </td><td>Smoked paprika </td></tr>
// <tr><td className="chocolate-fondant" data-clipboard-text="#56352d"> </td><td>Chocolate fondant </td></tr>
// <tr><td className="cherry-mahogany" data-clipboard-text="#66352b"> </td><td>Cherry mahogany </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="merlot" data-clipboard-text="#72262c"> </td><td>Merlot </td></tr>
// <tr><td className="red-pear" data-clipboard-text="#7b3539"> </td><td>Red pear </td></tr>
// <tr><td className="pickled-beet" data-clipboard-text="#4d233d"> </td><td>Pickled beet </td></tr>
// <tr><td className="plum-caspia" data-clipboard-text="#61224a"> </td><td>Plum caspia </td></tr>
// <tr><td className="winter-bloom" data-clipboard-text="#47243b"> </td><td>Winter bloom </td></tr>
// <tr><td className="spiced-plum" data-clipboard-text="#6d4773"> </td><td>Spiced plum </td></tr>
// <tr><td className="violet-indigo" data-clipboard-text="#3e285c"> </td><td>Violet indigo </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="maritime-blue" data-clipboard-text="#27293d"> </td><td>Maritime blue </td></tr>
// <tr><td className="obsidian" data-clipboard-text="#3a363b"> </td><td>Obsidian </td></tr>
// <tr><td className="black-beauty" data-clipboard-text="#26262a"> </td><td>Black beauty </td></tr>
// <tr><td className="blackened-pearl" data-clipboard-text="#4d4b50"> </td><td>Blackened pearl </td></tr>
// <tr><td className="odyssey-gray" data-clipboard-text="#434452"> </td><td>Odyssey gray </td></tr>
// <tr><td className="black-onyx" data-clipboard-text="#2b272b"> </td><td>Black onyx </td></tr>
// <tr><td className="navy-peony" data-clipboard-text="#223a5e"> </td><td>Navy peony </td></tr>

//       </table>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-3"></div>
//     <div className="col-3">
//       <table>
//         <tr><td className="sargasso-sea" data-clipboard-text="#35435a"> </td><td>Sargasso sea </td></tr>
// <tr><td className="sailor-blue" data-clipboard-text="#0e3a53"> </td><td>Sailor blue </td></tr>
// <tr><td className="gibraltar-sea" data-clipboard-text="#123850"> </td><td>Gibraltar sea </td></tr>
// <tr><td className="lapis-blue" data-clipboard-text="#004b8d"> </td><td>Lapis blue </td></tr>
// <tr><td className="baleine-blue" data-clipboard-text="#155187"> </td><td>Baleine blue </td></tr>
// <tr><td className="galaxy-blue" data-clipboard-text="#2a4b7c"> </td><td>Galaxy blue </td></tr>
// <tr><td className="blue-opal" data-clipboard-text="#0f3b57"> </td><td>Blue opal </td></tr>

//       </table>
//     </div>
//     <div className="col-3">
//       <table>
//         <tr><td className="moonlit-ocean" data-clipboard-text="#293b4d"> </td><td>Moonlit ocean </td></tr>
// <tr><td className="deep-dive" data-clipboard-text="#29495c"> </td><td>Deep dive </td></tr>
// <tr><td className="crystal-teal" data-clipboard-text="#00637c"> </td><td>Crystal teal </td></tr>
// <tr><td className="deep-lagoon" data-clipboard-text="#005265"> </td><td>Deep lagoon </td></tr>
// <tr><td className="sea-moss" data-clipboard-text="#254445"> </td><td>Sea moss </td></tr>
// <tr><td className="forest-biome" data-clipboard-text="#184a45"> </td><td>Forest biome </td></tr>
// <tr><td className="rain-forest" data-clipboard-text="#15463e"> </td><td>Rain forest </td></tr>

//       </table>
//     </div>
//     <div className="col-3"></div>
//   </div>

//   <script>
//     new Clipboard("td");
//   </script>
//         </div>
//     );
// }
// export default Pantone;