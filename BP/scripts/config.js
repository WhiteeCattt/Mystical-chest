/**
 * Создатель: WhiteeCattt
 * Телеграм-канал: t.me/addons_pe
*/

export default {
    prefix: "[§5Мистик§f]", // Префикс
    admin_tag: "Admin", // Админ тег
    online: 1, // Требуемый онлайн
    region: 50, // Радиус привата
    rarities: [ // Редкости
        { display: "§eОбычный", structure: "Ordinary_" }
    ],
    chest_typeId: "chest", // Айди сундука
    loots: 3, // Кол-во сохранённых сундуков с лутом
    spawn_radius: { // Радиус появления мистика
        x: -2000, x1: 2000,
        z: -2000, z1: 2000
    },
    time: {
        time: 3600, // Задержка между появлениями (В секундах)
        open_time: 600, // Время до открытия (В секундах)
        delete_time: 300 // Время до удаления (В секундах)
    },
    texts: {
        messages: { // Сообщения
            /**
             * $PREFIX - префикс
             * $ONLINE - онлайн сервера
             * $MIN_ONLINE - требуемый онлайн
             * $X, $Z - координаты мистика
             * $RARITY - редкость
            */
            time_left: "$PREFIX До появления мистического сундука осталось §e$TIME",
            no_online: "$PREFIX Не достаточно онлайна для появления мистического сундука! (§e$ONLINE§f/§e$MIN_ONLINE§f)",
            on_spawn: `§c╔=============================\n╠§f Ивент §dМисческий сундук§f!\n§c╠§f Координаты: §e$X $Z\n§c╠§f Редкость: $RARITY§r\n§c╚=============================`,
            cancel_event: "§l§cЭй!§r §7Извините, но вы не можете делать это здесь.",
            activate: "Вы успешно активировали мистик!",
            on_close: "Сундук закрыт!",
            command: {
                dont_spawned: "$PREFIX До появления мистического сундука §e$TIME сек.",
                spawned: "$PREFIX Мистический сундук появился на координатах §e$X $Z",
                not_enough_rights: "§cНе достаточно прав."
            }
        },
        floating_texts: { // Летающий текст
            /**
             * $TIME - время
             * $RARITY - редкость
            */
            no_activated: "§7Нажмите, что-бы активировать",
            on_spawn: "§d[Мистический сундук]§f\nИдёт активация...\nДо открытия: §e$TIME сек.",
            on_open: "§d[Мистический сундук]§f\n§aОткрыт!\nДо удаления: §e$TIME сек."
        }
    }
}
