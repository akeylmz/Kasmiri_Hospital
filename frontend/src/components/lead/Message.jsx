import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { UnipileClient } from "unipile-node-sdk"

const Message = ({message}) => {
  const [imageUrl, setImageUrl] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const BASE_URL = `https://api9.unipile.com:13920`
  const ACCESS_TOKEN = "4KfpVYrT.GaXc9QHSbaeYeyMN0fe9IWpe88eGWOt8DMPkUwDtgbI="
  
  const attachment_id = message?.attachments?.[0]?.id
  const message_id = message.id

  useEffect(() => {
    setImageUrl(null)
    setIsLoading(true)
    const fetchData = async () => {
      console.log(attachment_id);
      
      if(attachment_id){
        try {
          const client = new UnipileClient(BASE_URL, ACCESS_TOKEN)  
          const response = await client.messaging.getMessageAttachment({
            attachment_id,
            message_id,
          })
          const blob = response;  // API'den dönen veriyi blob olarak alıyoruz
          const url = URL.createObjectURL(blob);
          setImageUrl(url);
          setIsLoading(false)
        } catch (error) {
          setIsLoading(false)
        }
      }
    }  
    fetchData()
  }, [attachment_id])






  return (
    <div className={classNames({
        'flex gap-x-2 max-w-[45%]': true,
        'self-end': message.is_sender == 1
    })}>
        {!message.is_sender == -1 && <IoLogoWhatsapp color='blue' size={40} />}
        {/* <img src={message.avatar} className='w-6 h-6 rounded-full self-end object-cover' /> */}
        {message.text && 
          <p 
              style={{hyphens: 'auto'}}
              className={classNames({
                  'min-h-[44px] mt-2 inline-flex items-center py-2 px-4 text-sm rounded-3xl': true,
                  'border border-gray-200': !message.is_sender == 1,
                  'bg-[#efefef]': message.is_sender == 1
          })}>
              {message.text}
          </p>
        }  
        {message.attachments.length !== 0 && (isLoading ?  
            <div className='w-32 h-32 bg-slate-200 rounded-lg flex items-center justify-center'>
              <div className="animate-spin border-4 border-t-transparent border-gray-600 rounded-full w-12 h-12"></div> 
            </div>
            : <img className='rounded-lg' src={imageUrl} alt="Loading image" />)}
    </div>
  )
}

export default Message