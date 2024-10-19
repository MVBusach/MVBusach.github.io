// export const state = () => ({
//     projects:[],
//     tools:[]
// });

// export const mutations = {
//     init_projects(state, projects){
//         state.projects = projects
//     },
//     init_tools(state, tools){
//         state.tools = tools
//     }
// };
// export const actions= {
//     async nuxtServerInit({commit}, {$content}){
//         const projects =  await $content('proyectos')
//         .only(['title', 'tag', 'slug'])
//         .fetch()
//         .catch(()=>{console.log('error cargando')});
        
//         commit('init_projects', projects);

//         const tools = await $content('herramientas')
//         .only(['title', 'tag', 'slug'])
//         .fetch()
//         .catch(()=>{console.log('error cargando')});
//         commit('init_tools', tools);
//         console.log('nuxtServerInit', tools);
//     }
// };
