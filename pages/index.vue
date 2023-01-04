<script setup>
const ModalOpen = ref(false);
</script>
<template>
  <div>
    <Header>Nuxt3入門</Header>
    <!-- これだけでアイコンの読み込みできるの神 -->
    <Icon name="uil:github"></Icon>
    <Icon name="NuxtIcon"></Icon>
    <Icon name="uil:instagram"></Icon>
    <Icon name="ic:baseline-18-up-rating"></Icon>
    <Icon name="😄"></Icon>
    <button @click="ModalOpen = true">Open Modal</button>
    <ClientOnly>
      <Teleport to="body">
        <div v-if="ModalOpen" class="modal">
          <div class="modal-content">
            <p>Hello from the modal!</p>
            <button @click="ModalOpen = false">Close</button>
          </div>
        </div>
      </Teleport>
    </ClientOnly>
    <br />
    <List />
    <Footer></Footer>
  </div>
</template>
<style>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 600px;
  height: auto;
  border-radius: 20px;
  padding: 20px;
}
</style>
