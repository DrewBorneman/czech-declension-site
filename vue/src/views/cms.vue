<template>
  <div class="content overflow-y-scroll">
    <div class="flex flex-row space-x-12 mt-36">
      <div class="flex-grow"></div>
      <div class="flex-grow flex-shrink flex-basis-half bg-neutral-50 px-12 py-8">
        <h1 class="text-5xl font-bold mb-4">Edit Site Data</h1>
        <p class="text-xl mb-8">Here you can modify the website contents, sorted below by page:</p>
        <div class="ml-8 text-xl">
          <div>
            <h2 class="text-3xl font-bold mb-4">Site Info</h2>
            <table class="mx-12 mb-6 w-11/12">
              <tbody class="color-tbody">
                <tr class="py-2">
                  <td class="font-bold pr-12 p-4">Site Title*</td>
                  <td><input :class="defaultInputClasses" v-model="SiteInfo.name" required/></td>
                </tr>
                <tr class="py-2">
                  <td class="font-bold pr-12 p-4">Icon Path*</td>
                  <td><input :class="defaultInputClasses" v-model="SiteInfo.iconPath" required/></td>
                </tr>
                <tr class="py-2">
                  <td class="font-bold pr-12 p-4">Copyright Text*</td>
                  <td><input :class="defaultInputClasses" v-model="SiteInfo.copyrightStatement" required/></td>
                </tr>
                <tr class="py-2">
                  <td class="font-bold pr-12 p-4">CMS Password</td>
                  <td><button class="bg-blue-600 font-bold text-white rounded p-2 my-3" @click="updatePassword()">Change Password</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-4">Social Media Links</h2>
            <table class="mx-12 mb-6 w-11/12">
              <tbody class="color-tbody">
                <tr v-for="(link, index) in SiteInfo.links" :key="index" class="flex flex-row items-center space-x-2">
                  <td class="font-bold p-4">Name*</td>
                  <td><input :class="defaultInputClasses" v-model="link.name" required/></td>
                  <td class="font-bold p-4">Icon*</td>
                  <select class="border border-slate-500 rounded invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" v-model="link.icon" required>
                    <option disabled class="italic" value="">Select icon</option>
                    <option v-for="(_, key) in IconTypeLinkMapping" :value="key">
                      {{ IconTypeLinkMapping[key] }}
                    </option>
                  </select>
                  <td class="font-bold p-4">URL*</td>
                  <td class="w-1/3 pr-12"><input class="px-2 border border-slate-500 rounded w-full invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" v-model="link.url" required/></td>
                  <td class="font-bold p-4"><button @click="deleteLink(index)"><font-awesome-icon class="text-red-600 mr-2" :icon="IconType.trashCan" size="l"></font-awesome-icon></button></td>
                </tr>
                <tr>
                  <td class="font-bold p-4 underline"><button @click="addNewLink()" :disabled="SiteInfo.links.length > 10" :class="SiteInfo.links.length > 10 ? 'text-gray-500' : ''"><font-awesome-icon :class="(SiteInfo.links.length > 10) ? 'mr-2 text-green-300' : 'mr-2 text-green-600'" :icon="IconType.plus" size="l"> </font-awesome-icon>Add</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-4">Homepage</h2>
            <table class="mx-12 mb-6 w-11/12">
              <tbody class="color-tbody">
                <tr class="py-2">
                  <td class="font-bold pr-12 p-4">Title*</td>
                  <td><input :class="defaultInputClasses" v-model="HomeData.title" required/></td>
                </tr>
                <tr class="py-2">
                  <td class="font-bold pr-12 p-4">Subtitle*</td>
                  <td><input :class="defaultInputClasses" v-model="HomeData.subtitle" required/></td>
                </tr>
                <tr class="py-2">
                  <td class="font-bold pr-12 p-4">Tagline*</td>
                  <td><input :class="defaultInputClasses" v-model="HomeData.tagline" required/></td>
                </tr>
                <tr class="py-2">
                  <td class="font-bold pr-12 p-4">Image Path*</td>
                  <td><input :class="defaultInputClasses" v-model="HomeData.imagePath" required/></td>
                </tr>
                <tr class="py-2">
                  <td class="font-bold pr-12 p-4">Text (HTML)*</td>
                  <td><textarea :class="defaultTextAreaClasses" rows="8" v-model="HomeData.text" required></textarea></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-4">Resume</h2>
            <h4 class="text-xl font-bold mb-6 ml-6">Page Fields</h4>
            <table class="mx-12 mb-6 w-11/12">
              <tbody class="color-tbody">
                <tr class="py-2">
                  <td class="font-bold pr-12 p-4">Title*</td>
                  <td><input :class="defaultInputClasses" v-model="ResumeData.title" required/></td>
                </tr>
                <tr class="py-2">
                  <td class="font-bold pr-12 p-4">Text*</td>
                  <td><textarea :class="defaultTextAreaClasses" rows="3" v-model="ResumeData.text" required></textarea></td>
                </tr>
              </tbody>
            </table>
            <h4 class="text-xl font-bold mb-6 ml-6">Files</h4>
            <table class="mx-12 mb-6 w-11/12">
              <tbody class="color-tbody">
                <tr v-for="(file, index) in ResumeData.files" :key="index" class="flex flex-row items-center space-x-2">
                  <table class="w-full">
                    <tbody>
                      <tr>
                        <td class="font-bold p-4">Filename</td>
                        <td><input :class="defaultInputClasses" v-model="file.filename"/></td>
                        <td class="font-bold p-4">Path*</td>
                        <td class="w-1/3 pr-12"><input class="px-2 border border-slate-500 rounded w-full invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" v-model="file.path" required/></td>
                        <td class="font-bold p-4">Icon*</td>
                        <select class="m-4 border border-slate-500 rounded invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" v-model="file.icon" required>
                          <option disabled class="italic" value="">Select icon</option>
                          <option v-for="(_, key) in IconTypeFiletypeMapping" :value="key">
                            {{ IconTypeFiletypeMapping[key] }}
                          </option>
                        </select>
                        <td class="font-bold p-4"><button @click="deleteFile(index)"><font-awesome-icon class="text-red-600 mr-2" :icon="IconType.trashCan" size="l"></font-awesome-icon></button></td>
                      </tr>
                      <tr>
                        <td class="font-bold p-4">Description*</td>
                        <td colspan="4"><input :class="defaultInputClasses" v-model="file.description" required/></td>
                      </tr>
                    </tbody>
                  </table>
                </tr>
                <tr>
                  <td class="font-bold p-4 underline"><button @click="addNewFile()" :disabled="ResumeData.files.length > 8" :class="ResumeData.files.length > 8 ? 'text-gray-500' : ''"><font-awesome-icon :class="(ResumeData.files.length > 8) ? 'mr-2 text-green-300' : 'mr-2 text-green-600'" :icon="IconType.plus" size="l"> </font-awesome-icon>Add</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-4">Projects</h2>
            <h4 class="text-xl font-bold mb-6 ml-6">Page Fields</h4>
            <table class="mx-12 mb-6 w-11/12">
              <tbody class="color-tbody">
                <tr class="py-2">
                  <td class="font-bold pr-12 p-4">Title*</td>
                  <td><input :class="defaultInputClasses" v-model="ProjectsData.title" required/></td>
                </tr>
                <tr class="py-2">
                  <td class="font-bold pr-12 p-4">Text</td>
                  <td><textarea :class="defaultTextAreaClasses" rows="3" v-model="ProjectsData.text"></textarea></td>
                </tr>
                </tbody>
            </table>
            <h4 class="text-xl font-bold mb-6 ml-6">Projects List</h4>
            <table class="mx-12 mb-6 w-11/12">
              <tbody class="color-tbody">
                <tr v-for="(project, index) in ProjectsData.projects" :key="index" class="flex flex-col items-left">
                  <table>
                    <tbody>
                      <tr>
                        <td class="font-bold p-4">Name*</td>
                        <td><input :class="defaultInputClasses" v-model="project.title" required/></td>
                        <td class="font-bold p-4">Dates</td>
                        <td><input :class="defaultInputClasses" v-model="project.date"/></td>
                        <td class="font-bold p-4"><button @click="deleteProject(index)"><font-awesome-icon class="text-red-600 mr-2" :icon="IconType.trashCan" size="l"></font-awesome-icon></button></td>
                      </tr>
                      <tr>
                        <td class="font-bold p-4">URL</td>
                        <td class="w-1/3 pr-12"><input class="px-2 border border-slate-500 rounded w-full invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" v-model="project.url"/></td>
                        <td class="font-bold p-4">Image Path</td>
                        <td class="w-1/3 pr-12"><input class="px-2 border border-slate-500 rounded w-full invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500" v-model="project.imagePath"/></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="font-bold p-4">Text (HTML)</td>
                        <td colspan="4"><textarea :class="defaultTextAreaClasses" rows="4" v-model="project.text"></textarea></td>
                      </tr>
                    </tbody>
                  </table>
                </tr>
                <tr>
                  <td class="font-bold p-4 underline"><button @click="addNewProject()"><font-awesome-icon class="mr-2 text-green-600" :icon="IconType.plus" size="l"> </font-awesome-icon>Add</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-4">Contact</h2>
            <table class="mx-12 mb-6 w-11/12">
              <tbody class="color-tbody">
                <tr class="py-2">
                  <td class="font-bold pr-12 p-4">Title*</td>
                  <td><input :class="defaultInputClasses" v-model="ContactData.title" required/></td>
                </tr>
                <tr class="py-2">
                  <td class="font-bold pr-12 p-4">Subtitle</td>
                  <td><input :class="defaultInputClasses" v-model="ContactData.subtitle"/></td>
                </tr>
                <tr class="py-2">
                  <td class="font-bold pr-12 p-4">Text* (HTML)</td>
                  <td><textarea :class="defaultTextAreaClasses" rows="3" v-model="ContactData.text"></textarea></td>
                </tr>
              </tbody>
            </table>
          </div>
          <button class="bg-green-600 font-bold text-white rounded p-2 mt-8 mr-6" @click="updateData()">Update</button>
          <button class="bg-red-600 font-bold text-white rounded p-2 mt-8" @click="refreshData()">Discard</button>
        </div>
      </div>
      <div class="flex-grow"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { ref } from '@vue/reactivity';
import { getContactData, GetSiteInfo, GetHomeData, getProjectsData, getResumeData } from '../helpers/getRequests';
import { SetContactData, SetSiteInfo, SetHomeData, SetProjectsData, SetResumeData } from '../helpers/postRequests';
import { TContactRouteInfo, TSiteInfo, THomeRouteInfo, TResumeRouteInfo, TProjectsRouteInfo } from '../types/routes';
import { IconType, IconTypeLinkMapping, IconTypeFiletypeMapping } from '../types/enums.ts';
import type { TProject, TResumeFile, TSocialMediaLink } from "../types/components";
import { setNewPassword } from '../helpers/password';

const defaultInputClasses ="px-2 border border-slate-500 rounded w-11/12 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500";
const defaultTextAreaClasses = "px-2 my-2 border border-slate-500 rounded w-11/12 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500";
const ContactData = ref<TContactRouteInfo>(<TContactRouteInfo>{});
const SiteInfo = ref<TSiteInfo>(<TSiteInfo>{});
const HomeData = ref<THomeRouteInfo>(<THomeRouteInfo>{});
const ResumeData = ref<TResumeRouteInfo>(<TResumeRouteInfo>{});
const ProjectsData = ref<TProjectsRouteInfo>(<TProjectsRouteInfo>{});

onBeforeMount(async () => {
  refreshData();
})

async function refreshData() {
  SiteInfo.value = await GetSiteInfo();
  ContactData.value = await getContactData();
  HomeData.value = await GetHomeData();
  ResumeData.value = await getResumeData();
  ProjectsData.value = await getProjectsData();
}

const addNewLink = (): void => {
  SiteInfo.value.links.push(<TSocialMediaLink>{ name: '', icon: IconType.None, url: '' });
};

const deleteLink = (index: number): void => {
  SiteInfo.value.links.splice(index, 1);
};

const addNewFile = (): void => {
  ResumeData.value.files.push(<TResumeFile>{ filename: '', path: '', icon: IconType.None, description: '' });
};

const deleteFile = (index: number): void => {
  ResumeData.value.files.splice(index, 1);
};

const addNewProject = (): void => {
  ProjectsData.value.projects.push(<TProject>{ id: ProjectsData.value.projects.length, title: '', date: '', url: '', imagePath: '', text: '' });
};

const deleteProject = (index: number): void => {
  ProjectsData.value.projects.splice(index, 1);
};

const updateData = (): void => {
  SetHomeData(HomeData.value);
  SetSiteInfo(SiteInfo.value);
  SetResumeData(ResumeData.value);
  SetProjectsData(ProjectsData.value);
  SetContactData(ContactData.value);
};

const updatePassword = (): void => {
  setNewPassword();
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color-tbody > tr:nth-child(odd) {
  background-color: rgb(226 232 240);
}

.color-tbody > tr:nth-child(even) {
  background-color: rgb(244 244 245);
}


.flex-basis-half {
  flex-basis: 50%;
}
</style>
