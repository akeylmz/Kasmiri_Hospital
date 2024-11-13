# your_app_name/consumers.py

import json
from channels.generic.websocket import AsyncWebsocketConsumer

class MessageConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        # Kanal grubuna katıl
        await self.channel_layer.group_add("message_group", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        # Kanal grubundan çık
        await self.channel_layer.group_discard("message_group", self.channel_name)

    async def receive(self, text_data):
        # WebSocket üzerinden gelen mesajları işleme (isteğe bağlı)
        pass

    async def send_message(self, event):
        message = event['message']
        await self.send(text_data=json.dumps({
            'message': message
        }))
