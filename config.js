
let emailTemplate = function (name, email, message, subject) {
    let body = `<body>
    <div style="padding:0;margin:0">
        <table style="width: 100%; background: #edf3f8" border="0">
            <tbody>
            <tr>
                <td>
                    <table style="width:540px; background: #fff; padding: 0 30px; text-align:center;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;margin:0 auto;"
                           border="0">
                        <tbody>
    
                        <!-- espaçamento -->
                        <tr style="height: 30px"></tr>
    
                        <!-- logo -->
                        <tr>
                            <td>
                                <img src="100x400.png" alt="">
                            </td>
                        </tr>
    
    
                        
    
                        <tr style="height: 30px"></tr>
                        <!-- cabeçalho -->
    
                        <tr style="background: #f5f9fb;">
                            <td style="padding: 10px 10px 10px 25px; border-top: 1px solid #084553;">
    
                                <p style="color: #084553; font-weight:800; text-align:center; font-size: 28px; margin-bottom: 10px!important">` + subject + `</p>
                                
                            </td>
                        </tr>
    
                        <tr style="height: 30px"></tr>
                        <!-- cabeçalho -->
    
                        <tr style="background: #e1e5e8;">
                            <td style="padding: 10px 10px 10px 10px; border-top: 1px solid #084553;">
    
                                <p style="color: #084553; font-weight:800; text-align:left; font-size: 15px; margin-bottom: 10px!important">De: ` + name + ` </p>
                                <p style="color: #084553; font-weight:800; text-align:left; font-size: 15px; margin-bottom: 10px!important">E-mail: ` + email + `</p>
                                
                                </div>
                            </td>
                        </tr>
    
                        <!-- espaçamento -->
                        <tr style="height: 30px"></tr>
    
    
                        <!-- dados -->
                        <tr>
                            <td>
                                <table style="width: 100%; border-bottom: 1px solid #d8dcde; border-top-right-radius: 5px;border-top-left-radius: 5px;" cellspacing="0"
                                       cellpadding="0" border="0">
                                    <tbody>
    
                                    <!-- cabeçalho -->
                                    <tr style="background: #084553;">
                                        <td style="padding: 10px 10px 10px 30px; border-top-right-radius: 5px;border-top-left-radius: 5px;">
                                            <p style="color: #fff; padding:0; margin: 0; font-weight:800; text-align:left; font-size: 25px;">Mensagem:</p>
                                        </td>
                                    </tr>
    
                                    <!-- dados -->
                                    <tr style="background: #FCFCFC ">
                                        <td style="border-right: 1px solid #d8dcde; border-left: 1px solid #d8dcde;">
                                            <table style="width: 100%;" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
    
                                                <!-- adultos -->
                                                <tr>
                                                    <td style="padding: 5px 20px 5px 25px; width: 100%;">
                                                        <table style="margin:auto; padding-top: 5%;padding-bottom: 5%;width:100%" class="m_-5258102743783239414mce-item-table" cellspacing="0"
                                                               cellpadding="0" border="0">
                                                            <tbody>
                                                            
                                                                     ` +  message + `                                           
    
    
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
    
    
                                                    <!-- espaçamento rigth -->
                                                    <td style="border-right:1px solid #d8dcde" width="30"></td>
    
    
                                                </tr>
    
    
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
    
                                    </tbody>
                                </table>
                            </td>
    
                        </tr>
    
    
    
                        <!-- espaçamento -->
                        <tr style="height: 30px"></tr>
    
                        </tbody>
                    </table>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    </body>`



    return body;
}

module.exports = {
    emailTemplate: emailTemplate
};








