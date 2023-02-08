//Función para obtener las entradas del usuario
function getUserInputs(){
  var hoja = SpreadsheetApp.getActiveSheet();
  var topic = sheet.getRange("A1").getValue();
  var audiencia = sheet.getRange("A2").getValue();
  var style = hoja.getRange("A3").getValue(); //mencionar un autor aquí
  var numChapters = hoja.getRange("A4").getValue(); //número de capítulos

  return {'topic': topic, 'audience': audience, 'style': style, 'numChapters': numChapters};
}


//Función para generar 5 títulos sugeridos para el libro con la API GPT-3 y ponerlos en la celda A2 de Google Sheets
function generarTitulos() {

  //Obtener las entradas de usuario de la función anterior
  let userInputs = getUserInputs();

    //Llamar a la API GPT-3 para generar 5 títulos basados en los parámetros dados y almacenarlos en una variable
    let titleSuggestions= TextCortex('text-davinci',{model: "gpt-3"}).generate({prompt: `Quiero escribir un libro de autoayuda sobre ${userInputs['tema']} para ${userInputs['audiencia']} audiencia usando el estilo de escritura de ${userInputs['estilo']}.`, num_tokens : 20});

    //Poner los títulos generados en la celda A2 de Google Sheets SpreadsheetApp.getActiveSheet().insertRowBefore(2); SpreadsheetApp.setActiveCell(SpreadsheetApp.setActiveCell(SpreadsheetApp., 1 , 2)); SpreadsheetApp.(titleSuggestions); }     

/*Función para tomar la entrada de la Celda A3 y llamar de nuevo a la API GPT-3 con una sugerencia más específica (Incluyendo el título seleccionado)*/ 
function selectTitle() { let selectedTitle= Spreadsheetapp.().activecellvalue; let newPrompt= `Quiero escribir un libro de autoayuda sobre ${userinputs('tema')} para la audiencia de${userinputs('audiencia')} usando el estilo de escritura de${userinputs('estilo')}. El título que he elegido es "${selectedTitle}"`; TextCortex('text-davinci',{model: "gpt-3"}).generate({prompt: newPrompt, num_tokens : 100}); }        
/* Función para crear el registro de contenido en la celda A4 */ function createContentLogging(){ /*Vuelve a llamar a la API de GPT 3 con un prompt más específico (Incluyendo el título seleccionado y el número de capítulos) */ let newPrompt= `Quiero escribir un libro de autoayuda sobre ${userinputs('tema')} para ${userinputs('audiencia')} audiencia usando el estilo de escritura de ${userinputsprompt)} El título que he elegido es "${selectedTitle}" y tiene un total de ${numChapters} capítulos`;            TextCortex ('texto - davinci', {model:"gpt - 3"} ) .generate ({prompt : newPromtp ,num _tokens : 100 }); Para cada capítulo llame a GPT 3 APi por separado con un prompt más específico incluyendo el número de capítulo, nombre del capítulo, etc }        Function GenerateChapterPart() { Let ChapterNumber= arguments[0]; Let PartNumber= arguments[1]; Let NewPromp=""; If (PartNumber==1){ NewPromp="Estoy comenzando mi Capítulo "+NúmeroDeCapítulo+".Su nombre es "+nombreDelCapítulo+"".              Else{ Newpromp="Esta es la parte "+númeroDeParte+"del capítulo "+númeroDeCapítulo+". Su nombre es "+nombredelcapítulo+"."; }              CallGPTAPIwithspecificpromp(newpromp); Return responsefromapi ; }
